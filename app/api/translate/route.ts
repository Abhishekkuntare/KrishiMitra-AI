// import { google } from "@ai-sdk/google"
// import { generateText } from "ai"
// import { NextResponse } from "next/server"


// // Simple translation dictionary for basic agricultural terms
// const basicTranslations = {
//   en: {
//     hi: {
//       crop: "फसल",
//       soil: "मिट्टी",
//       disease: "रोग",
//       fertilizer: "उर्वरक",
//       irrigation: "सिंचाई",
//       harvest: "फसल",
//       seed: "बीज",
//       plant: "पौधा",
//       farm: "खेत",
//       farmer: "किसान",
//     },
//     mr: {
//       crop: "पीक",
//       soil: "माती",
//       disease: "रोग",
//       fertilizer: "खत",
//       irrigation: "पाणी पुरवठा",
//       harvest: "कापणी",
//       seed: "बियाणे",
//       plant: "वनस्पती",
//       farm: "शेत",
//       farmer: "शेतकरी",
//     },
//     ta: {
//       crop: "பயிர்",
//       soil: "மண்",
//       disease: "நோய்",
//       fertilizer: "உரம்",
//       irrigation: "நீர்ப்பாசனம்",
//       harvest: "அறுவடை",
//       seed: "விதை",
//       plant: "தாவரம்",
//       farm: "பண்ணை",
//       farmer: "விவசாயி",
//     },
//     te: {
//       crop: "పంట",
//       soil: "మట్టి",
//       disease: "వ్యాధి",
//       fertilizer: "ఎరువులు",
//       irrigation: "నీటిపారుదల",
//       harvest: "కోత",
//       seed: "విత్తనం",
//       plant: "మొక్క",
//       farm: "వ్యవసాయ క్షేత్రం",
//       farmer: "రైతు",
//     },
//   },
// }


// function basicTranslate(text: string, targetLanguage: string): string {
//   const translations = basicTranslations.en[targetLanguage]
//   if (!translations) return text

//   let translatedText = text
//   Object.entries(translations).forEach(([english, translated]) => {
//     const regex = new RegExp(`\\b${english}\\b`, "gi")
//     translatedText = translatedText.replace(regex, translated)
//   })

//   return translatedText
// }


// export async function POST(req: Request) {
//   try {
//     const { text, targetLanguage } = await req.json()

//     const response = await fetch(
//       `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
//     )

//     const data = await response.json()

//     return NextResponse.json({
//       translated: data[0][0][0],
//     })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json(
//       { translated: "Translation failed" },
//       { status: 500 }
//     )
//   }
// }


import { google } from "@ai-sdk/google"
import { generateText } from "ai"
import { NextResponse } from "next/server"

// ✅ Basic dictionary
const basicTranslations = {
  en: {
    hi: {
      crop: "फसल",
      soil: "मिट्टी",
      disease: "रोग",
      fertilizer: "उर्वरक",
      irrigation: "सिंचाई",
      harvest: "फसल",
      seed: "बीज",
      plant: "पौधा",
      farm: "खेत",
      farmer: "किसान",
    },
    mr: {
      crop: "पीक",
      soil: "माती",
      disease: "रोग",
      fertilizer: "खत",
      irrigation: "पाणी पुरवठा",
      harvest: "कापणी",
      seed: "बियाणे",
      plant: "वनस्पती",
      farm: "शेत",
      farmer: "शेतकरी",
    },
    ta: {
      crop: "பயிர்",
      soil: "மண்",
      disease: "நோய்",
      fertilizer: "உரம்",
      irrigation: "நீர்ப்பாசனம்",
      harvest: "அறுவடை",
      seed: "விதை",
      plant: "தாவரம்",
      farm: "பண்ணை",
      farmer: "விவசாயி",
    },
    te: {
      crop: "పంట",
      soil: "మట్టి",
      disease: "వ్యాధి",
      fertilizer: "ఎరువులు",
      irrigation: "నీటిపారుదల",
      harvest: "కోత",
      seed: "విత్తనం",
      plant: "మొక్క",
      farm: "వ్యవసాయ క్షేత్రం",
      farmer: "రైతు",
    },
  },
}

function basicTranslate(text: string, targetLanguage: string): string {
  const translations = basicTranslations.en[targetLanguage]
  if (!translations) return text

  let translatedText = text
  Object.entries(translations).forEach(([english, translated]) => {
    const regex = new RegExp(`\\b${english}\\b`, "gi")
    translatedText = translatedText.replace(regex, translated)
  })

  return translatedText
}

export async function POST(req: Request) {
  const { text, targetLanguage, context = "agriculture" } = await req.json()

  const GOOGLE_AI_STUDIO_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY

  const languageNames: Record<string, string> = {
    en: "English",
    hi: "Hindi",
    mr: "Marathi",
    ta: "Tamil",
    te: "Telugu",
  }

  // -------------------------------
  // ✅ STEP 1: Try Gemini AI
  // -------------------------------
  try {
    if (!GOOGLE_AI_STUDIO_API_KEY) throw new Error("No API key")

    const systemPrompt = `You are a professional agricultural translator.
Translate the text into ${languageNames[targetLanguage]}.
Keep it farmer-friendly and accurate.

Context: ${context}

Only return translated text.`

    const result = await generateText({
      model: google("gemini-1.5-flash", {
        apiKey: GOOGLE_AI_STUDIO_API_KEY,
      }),
      system: systemPrompt,
      prompt: text,
    })

    return NextResponse.json({
      translated: result.text,
      source: "gemini",
    })
  } catch (geminiError) {
    console.error("Gemini failed:", geminiError)
  }

  // -------------------------------
  // ✅ STEP 2: Fallback → Google Translate API
  // -------------------------------
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
    )

    const data = await response.json()

    return NextResponse.json({
      translated: data[0][0][0],
      source: "google-api",
    })
  } catch (googleError) {
    console.error("Google API failed:", googleError)
  }

  // -------------------------------
  // ✅ STEP 3: Final fallback → basic dictionary
  // -------------------------------
  const basic = basicTranslate(text, targetLanguage)

  return NextResponse.json(
    {
      translated: basic,
      source: "basic",
      error: "All translation services failed. Using basic translation.",
    },
    { status: 200 }
  )
}