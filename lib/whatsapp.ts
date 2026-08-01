function getConfig() {
  const apiKey = process.env.BOL7_API_KEY;
  const phoneNumberId = process.env.BOL7_PHONE_NUMBER_ID;
  const templateName = process.env.BOL7_OTP_TEMPLATE_NAME;

  if (!apiKey || !phoneNumberId || !templateName) {
    throw new Error("BOL7 WhatsApp API is not configured in environment variables");
  }

  return { apiKey, phoneNumberId, templateName };
}

export async function sendOtpWhatsApp(mobileNumber: string, otp: string): Promise<void> {
  const { apiKey, phoneNumberId, templateName } = getConfig();

  const res = await fetch(`https://next.bol7.com/external/whatsapp/${phoneNumberId}/messages/`, {
    method: "POST",
    headers: {
      "X-Secret-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: `91${mobileNumber}`,
      type: "template",
      template: {
        name: templateName,
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [{ type: "text", text: otp }],
          },
        ],
      },
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    throw new Error(`BOL7 WhatsApp send failed (${res.status}): ${errorBody}`);
  }
}
