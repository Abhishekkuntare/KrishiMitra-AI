import { google } from "@ai-sdk/google"
import { generateText } from "ai"
import { NextResponse } from "next/server"


// Simple translation dictionary for basic agricultural terms
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
  try {
    const { text, targetLanguage } = await req.json()

    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
    )

    const data = await response.json()

    return NextResponse.json({
      translated: data[0][0][0],
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { translated: "Translation failed" },
      { status: 500 }
    )
  }
}