export interface SurgeryContent {
  slug: string;
  name: string;
  shortName: string;
  price: string;
  heroDescription: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  aboutTitle: string;
  aboutParagraphs: string[];
  overviewTabs: { label: string; items: string[] }[];
  whyChooseNumbered: { number: string; title: string; description: string; bg: string }[];
  diagnosticTests: string[];
  procedureSteps: string[];
  postOpDo: string[];
  postOpDont: string[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const BG_CYCLE = ["bg-hblue-light", "bg-amber-50", "bg-hgreen-light", "bg-[#eef2ff]"];

export const SURGERIES: Record<string, SurgeryContent> = {
  hernia: {
    slug: "hernia",
    name: "Hernia Surgery",
    shortName: "Hernia",
    price: "₹55,000",
    heroDescription:
      "Safe, minimally invasive hernia repair with cashless insurance, no-cost EMI, and free follow-ups. Contact us for expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable prices.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.8", label: "Patient Rating" },
      { value: "10,000+", label: "Hernia Surgeries Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What is a Hernia?",
    aboutParagraphs: [
      "A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle wall, most commonly in the abdomen or groin. It often appears as a visible bulge that may grow larger over time and cause discomfort, especially when lifting, coughing, or standing for long periods.",
      "Hernias do not heal on their own and generally require surgical repair to prevent complications. Doctor247 connects you with verified general surgeons across Bangalore for safe, affordable hernia treatment.",
    ],
    overviewTabs: [
      {
        label: "When to choose Hernia surgery?",
        items: [
          "A visible bulge that grows larger over time",
          "Pain or discomfort while lifting, coughing, or standing",
          "Bulge that cannot be pushed back in (may need urgent care)",
          "Nausea or vomiting along with the bulge (emergency sign)",
        ],
      },
      {
        label: "Preventing Hernia",
        items: [
          "Avoid heavy lifting, or use proper lifting technique",
          "Maintain a healthy body weight",
          "Treat chronic cough and constipation early",
          "Strengthen core and abdominal muscles regularly",
        ],
      },
      {
        label: "Complications of Hernia",
        items: [
          "Incarceration — hernia gets stuck outside the abdomen",
          "Strangulation — blood supply to tissue is cut off (emergency)",
          "Increasing pain and swelling if left untreated",
          "Higher surgical risk the longer surgery is delayed",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Cashless Insurance — we handle paperwork with 15+ insurance partners so you don't pay out of pocket",
          "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
          "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
          "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Advanced Laparoscopic Technique",
        description:
          "We use minimally invasive keyhole surgery for hernia repair, resulting in less pain, smaller scars, and a quicker return to daily activities.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced General Surgeons",
        description:
          "Every Doctor247 surgeon has a minimum of 8 years of experience performing hernia repairs with consistently high success rates.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "Over 95% Success Rate",
        description:
          "Our mesh-repair technique and post-operative care protocol keep hernia recurrence rates well under the national average.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Cashless Insurance & Free Follow-ups",
        description:
          "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "Physical examination of the bulge",
      "Ultrasound of the abdomen/groin",
      "CT scan (for complex or recurrent hernias)",
      "Blood tests to assess fitness for surgery",
    ],
    procedureSteps: [
      "Anaesthesia (local, spinal, or general depending on your case)",
      "Laparoscopic (keyhole) or open repair of the weakened muscle wall",
      "Placement of a surgical mesh to reinforce the area, if required",
      "Closure of incisions — typically 30-60 minutes total",
    ],
    postOpDo: [
      "Take prescribed pain relief and antibiotics on schedule",
      "Walk short distances from day 1 to aid circulation",
      "Eat light, fibre-rich meals to avoid constipation",
      "Attend your follow-up visit within 7-10 days",
    ],
    postOpDont: [
      "Don't lift anything heavier than 5 kg for 4-6 weeks",
      "Don't drive until your surgeon clears you",
      "Don't skip your prescribed medication schedule",
      "Don't ignore fever, redness, or unusual swelling — call us",
    ],
    testimonials: [
      {
        quote:
          "“I was scared of surgery but the laparoscopic procedure was quick and I was back home the same evening. Recovery was much easier than I expected.”",
        name: "R. Sharma",
        role: "Koramangala, Bangalore",
      },
      {
        quote:
          "“The team explained every step clearly and handled my insurance claim end-to-end. No hidden costs, exactly as quoted.”",
        name: "M. Iqbal",
        role: "HSR Layout, Bangalore",
      },
      {
        quote:
          "“Free follow-ups for 3 months gave me real peace of mind. My surgeon checked on my recovery personally every time.”",
        name: "A. Fernandes",
        role: "Whitefield, Bangalore",
      },
    ],
    faqs: [
      {
        q: "Is hernia surgery painful?",
        a: "Most patients experience mild discomfort for a few days, well managed with prescribed pain medication. Laparoscopic surgery generally causes less post-operative pain than open surgery.",
      },
      {
        q: "How long does recovery take?",
        a: "Most patients return to light daily activities within a week and to normal activity, including exercise, within 4-6 weeks. Recovery time depends on the type of hernia and surgical technique used.",
      },
      {
        q: "Is hernia surgery covered by insurance?",
        a: "Yes, hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
      },
      {
        q: "Can a hernia come back after surgery?",
        a: "Recurrence rates are low (under 5%) when mesh repair is used by an experienced surgeon. Following post-operative guidelines significantly reduces the risk of recurrence.",
      },
      {
        q: "What is the difference between open and laparoscopic repair?",
        a: "Laparoscopic (keyhole) repair uses small incisions and typically means less pain and a faster return to activity, while open repair may be recommended for larger or complex hernias. Your surgeon will recommend the best option for your case.",
      },
    ],
    metaTitle: "Hernia Surgery in Bangalore | Laparoscopic Hernia Repair — Doctor247",
    metaDescription:
      "Best hernia surgery in Bangalore starting at ₹55,000. Laparoscopic & open hernia repair by verified surgeons, cashless insurance, no-cost EMI, free follow-ups.",
    metaKeywords:
      "hernia surgery in bangalore, hernia treatment bangalore, laparoscopic hernia surgery, best hernia surgeon bangalore, inguinal hernia repair cost, hernia operation cost bangalore",
  },

  piles: {
    slug: "piles",
    name: "Piles Surgery",
    shortName: "Piles",
    price: "₹45,000",
    heroDescription:
      "Painless, laser and stapler piles treatment with same-day discharge, cashless insurance, and free follow-ups. Get relief from piles, fissures, and fistula with expert proctologists in Bangalore.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.7", label: "Patient Rating" },
      { value: "8,000+", label: "Piles Surgeries Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What are Piles (Hemorrhoids)?",
    aboutParagraphs: [
      "Piles, medically known as hemorrhoids, are swollen veins in the lowest part of the rectum and anus. They can develop inside the rectum (internal piles) or under the skin around the anus (external piles), often causing pain, itching, and bleeding during bowel movements.",
      "Mild piles can sometimes be managed with diet and medication, but moderate to severe piles usually need a minor procedure or surgery. Doctor247 offers painless laser and stapler treatments with minimal downtime.",
    ],
    overviewTabs: [
      {
        label: "When to choose Piles surgery?",
        items: [
          "Persistent bleeding during or after bowel movements",
          "A lump or swelling near the anus that doesn't reduce",
          "Pain, itching, or discomfort that doesn't improve with medication",
          "Piles that prolapse (come out) with each bowel movement",
        ],
      },
      {
        label: "Preventing Piles",
        items: [
          "Eat a high-fibre diet with fruits, vegetables, and whole grains",
          "Drink plenty of water to keep stools soft",
          "Avoid straining during bowel movements",
          "Stay physically active and avoid prolonged sitting",
        ],
      },
      {
        label: "Complications of Piles",
        items: [
          "Chronic anemia from ongoing blood loss",
          "Strangulated hemorrhoids (blood supply cut off)",
          "Thrombosis — painful blood clot in an external pile",
          "Skin tags and recurrent infections if left untreated",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Laser & Stapler Techniques — minimal pain, faster healing, same-day discharge",
          "Free Follow-ups — post-surgery consultations included for 90 days",
          "No-Cost EMI — split your treatment cost into easy monthly instalments",
          "Verified Proctologists — every surgeon is credential-checked and experienced",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Laser & Stapler Piles Treatment",
        description:
          "Minimally invasive laser and stapler hemorrhoidopexy techniques mean less pain, minimal bleeding, and a quicker return to normal life.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced Proctologists",
        description:
          "Our proctology specialists have years of experience treating piles, fissures, and fistulas with consistently high success rates.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "Same-Day Discharge",
        description:
          "Most piles procedures at Doctor247 are day-care surgeries — you can go home the same day and resume light activity within 2-3 days.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Cashless Insurance & Free Follow-ups",
        description:
          "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "Digital rectal examination",
      "Proctoscopy / anoscopy to view internal piles",
      "Colonoscopy (if bleeding cause is unclear)",
      "Blood tests to assess fitness for the procedure",
    ],
    procedureSteps: [
      "Local, spinal, or general anaesthesia depending on the technique used",
      "Laser ablation or stapler hemorrhoidopexy to remove/shrink pile mass",
      "Minimal cutting with laser techniques, reducing post-op pain",
      "Procedure typically completed within 20-40 minutes",
    ],
    postOpDo: [
      "Take a warm sitz bath 2-3 times a day as advised",
      "Eat a high-fibre diet and stay well hydrated",
      "Take prescribed stool softeners to avoid straining",
      "Attend your follow-up visit within 7 days",
    ],
    postOpDont: [
      "Don't strain or sit on the toilet for long periods",
      "Don't lift heavy weights for at least 2 weeks",
      "Don't ignore continued bleeding — call us immediately",
      "Don't skip your prescribed medication schedule",
    ],
    testimonials: [
      {
        quote:
          "“I suffered from piles for years and kept delaying treatment out of fear. The laser procedure was quick and almost painless — I wish I had done it sooner.”",
        name: "S. Reddy",
        role: "Jayanagar, Bangalore",
      },
      {
        quote:
          "“Same-day discharge and clear instructions made recovery stress-free. The team followed up regularly to check on me.”",
        name: "V. Kumar",
        role: "Marathahalli, Bangalore",
      },
      {
        quote:
          "“Very professional staff and transparent pricing. No hidden charges, and my insurance claim was handled smoothly.”",
        name: "P. Nair",
        role: "Indiranagar, Bangalore",
      },
    ],
    faqs: [
      {
        q: "Is laser piles surgery painful?",
        a: "Laser piles treatment causes significantly less pain than traditional surgery since it avoids large incisions. Most patients report mild discomfort managed easily with medication.",
      },
      {
        q: "How long does piles surgery recovery take?",
        a: "Most patients return to light activities within 2-3 days and normal activity within 1-2 weeks. Laser and stapler techniques generally offer faster recovery than conventional surgery.",
      },
      {
        q: "Is piles surgery covered by insurance?",
        a: "Yes, piles/hemorrhoid surgery is covered by most health insurance plans in India. We assist with cashless claims across 15+ insurance partners.",
      },
      {
        q: "Will piles come back after surgery?",
        a: "Recurrence is uncommon after laser or stapler treatment when combined with dietary changes and good bowel habits, though it is not impossible with poor lifestyle habits.",
      },
      {
        q: "What is the difference between laser and stapler piles treatment?",
        a: "Laser treatment uses focused light energy to shrink pile tissue with minimal cutting, while stapler surgery repositions and staples prolapsed tissue. Your surgeon will recommend the best option based on the grade and location of your piles.",
      },
    ],
    metaTitle: "Piles Surgery in Bangalore | Laser Piles Treatment — Doctor247",
    metaDescription:
      "Best piles (hemorrhoids) treatment in Bangalore starting at ₹45,000. Painless laser & stapler surgery, same-day discharge, cashless insurance, expert proctologists.",
    metaKeywords:
      "piles surgery in bangalore, piles treatment bangalore, laser piles treatment, best hospital for piles treatment in bangalore, hemorrhoid surgery cost, fissure fistula treatment bangalore",
  },

  gallbladder: {
    slug: "gallbladder",
    name: "Gallbladder Surgery",
    shortName: "Gallbladder Stones",
    price: "₹60,000",
    heroDescription:
      "Advanced laparoscopic gallbladder removal (cholecystectomy) with tiny incisions, quick recovery, cashless insurance, and free follow-ups. Trusted by patients for safe, affordable gallstone treatment in Bangalore.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.8", label: "Patient Rating" },
      { value: "6,500+", label: "Gallbladder Surgeries Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What are Gallbladder Stones?",
    aboutParagraphs: [
      "Gallstones are hardened deposits of digestive fluid that form inside the gallbladder, a small organ beneath the liver. They can range from tiny grain-like particles to golf-ball sized stones, and often cause pain, especially after fatty meals.",
      "When gallstones cause repeated pain or complications like infection or blockage, the standard treatment is laparoscopic removal of the gallbladder. Doctor247 connects you with experienced surgeons for safe, minimally invasive gallbladder surgery in Bangalore.",
    ],
    overviewTabs: [
      {
        label: "When to choose Gallbladder surgery?",
        items: [
          "Recurrent, sharp pain in the upper right abdomen (biliary colic)",
          "Pain after eating fatty or oily food",
          "Nausea, vomiting, or bloating linked to gallstone attacks",
          "Jaundice or fever suggesting infection or blocked bile duct",
        ],
      },
      {
        label: "Preventing Gallstones",
        items: [
          "Maintain a healthy body weight and avoid rapid weight loss",
          "Eat a balanced diet with healthy fats and fibre",
          "Stay physically active with regular exercise",
          "Avoid prolonged fasting or crash diets",
        ],
      },
      {
        label: "Complications of Gallstones",
        items: [
          "Acute cholecystitis — inflammation and infection of the gallbladder",
          "Blocked bile duct leading to jaundice",
          "Acute pancreatitis if a stone blocks the pancreatic duct",
          "Gallbladder perforation in severe, untreated cases",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Advanced Laparoscopic Technique — tiny incisions, faster healing, minimal scarring",
          "Free Follow-ups — post-surgery consultations included for 90 days",
          "No-Cost EMI — split your surgery cost into easy monthly instalments",
          "Verified Surgeons — experienced in advanced laparoscopic cholecystectomy",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Advanced Laparoscopic Cholecystectomy",
        description:
          "We use keyhole surgery with 3-4 tiny incisions to remove the gallbladder, resulting in less pain and a much faster recovery than open surgery.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced Laparoscopic Surgeons",
        description:
          "Our surgeons have performed thousands of gallbladder removal procedures with consistently high success rates and low complication rates.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "1-2 Day Hospital Stay",
        description:
          "Most patients are discharged within 24-48 hours of surgery and return to normal light activity within a week.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Cashless Insurance & Free Follow-ups",
        description:
          "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "Abdominal ultrasound to detect gallstones",
      "Blood tests to check liver function and infection markers",
      "CT scan or MRCP for complex cases",
      "ECG and fitness assessment before surgery",
    ],
    procedureSteps: [
      "General anaesthesia for a pain-free procedure",
      "3-4 small keyhole incisions in the abdomen",
      "Laparoscopic removal of the gallbladder using a camera and specialised instruments",
      "Procedure typically completed within 45-60 minutes",
    ],
    postOpDo: [
      "Walk short distances from day 1 to aid recovery",
      "Follow a light, low-fat diet for the first few weeks",
      "Take prescribed pain relief and antibiotics on schedule",
      "Attend your follow-up visit within 7-10 days",
    ],
    postOpDont: [
      "Don't eat heavy, oily, or fried food immediately after surgery",
      "Don't lift heavy weights for 2-4 weeks",
      "Don't drive until your surgeon clears you",
      "Don't ignore fever, yellowing of eyes/skin, or severe pain — call us",
    ],
    testimonials: [
      {
        quote:
          "“I had gallstone attacks for months before finally getting surgery. The laparoscopic procedure was quick and I was up and about within two days.”",
        name: "K. Rao",
        role: "Basavanagudi, Bangalore",
      },
      {
        quote:
          "“Very smooth process from consultation to surgery. The surgeon explained everything clearly and the team followed up regularly.”",
        name: "N. D'Souza",
        role: "Bellandur, Bangalore",
      },
      {
        quote:
          "“Affordable pricing and cashless insurance made the whole experience stress-free. Highly recommend Doctor247.”",
        name: "T. Gowda",
        role: "Rajajinagar, Bangalore",
      },
    ],
    faqs: [
      {
        q: "Is gallbladder removal surgery safe?",
        a: "Yes, laparoscopic cholecystectomy is one of the most commonly performed and safest surgical procedures, with a very low complication rate when performed by an experienced surgeon.",
      },
      {
        q: "Can I live a normal life without a gallbladder?",
        a: "Yes, the liver continues to produce bile even after the gallbladder is removed. Most people digest food normally, though some may need to moderate fatty food intake initially.",
      },
      {
        q: "Is gallbladder surgery covered by insurance?",
        a: "Yes, gallbladder removal is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
      },
      {
        q: "How long is the hospital stay for gallbladder surgery?",
        a: "Most patients are discharged within 1-2 days after laparoscopic gallbladder removal, compared to 5-7 days for open surgery.",
      },
      {
        q: "What is the difference between laparoscopic and open gallbladder surgery?",
        a: "Laparoscopic surgery uses small keyhole incisions and offers faster recovery with less scarring, while open surgery may be needed for complex or emergency cases. Your surgeon will recommend the safest option for you.",
      },
    ],
    metaTitle: "Gallbladder Surgery in Bangalore | Laparoscopic Cholecystectomy — Doctor247",
    metaDescription:
      "Best gallbladder stone surgery in Bangalore starting at ₹60,000. Laparoscopic cholecystectomy by expert surgeons, cashless insurance, no-cost EMI, quick recovery.",
    metaKeywords:
      "gallbladder surgery in bangalore, gallstone surgery cost bangalore, laparoscopic cholecystectomy, best hospital for gallbladder surgery, gallbladder stone removal bangalore",
  },

  "kidney-stone": {
    slug: "kidney-stone",
    name: "Kidney Stone Surgery (PCNL)",
    shortName: "Kidney Stones",
    price: "₹90,000",
    heroDescription:
      "Advanced PCNL and laser kidney stone removal with minimal scarring, quick recovery, cashless insurance, and free follow-ups. Get relief from kidney stone pain with expert urologists in Bangalore.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.7", label: "Patient Rating" },
      { value: "5,000+", label: "Kidney Stone Surgeries Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What is a Kidney Stone?",
    aboutParagraphs: [
      "Kidney stones are hard deposits made of minerals and salts that form inside the kidneys. They can be as small as a grain of sand or as large as a golf ball, and often cause severe pain when they move within the kidney or into the ureter.",
      "Small stones may pass on their own, but larger or stuck stones usually need a procedure such as PCNL (percutaneous nephrolithotomy), URS (ureteroscopy), or laser lithotripsy. Doctor247 connects you with experienced urologists for safe, effective kidney stone treatment in Bangalore.",
    ],
    overviewTabs: [
      {
        label: "When to choose Kidney Stone surgery?",
        items: [
          "Severe, colicky pain in the back or side that doesn't subside",
          "Blood in urine along with pain",
          "Stone larger than 6-7mm that is unlikely to pass naturally",
          "Recurrent urinary tract infections linked to a stone",
        ],
      },
      {
        label: "Preventing Kidney Stones",
        items: [
          "Drink plenty of water throughout the day",
          "Reduce salt and animal protein intake",
          "Limit oxalate-rich foods if advised by your doctor",
          "Get stones tested to identify the cause and prevent recurrence",
        ],
      },
      {
        label: "Complications of Kidney Stones",
        items: [
          "Hydronephrosis — kidney swelling due to blocked urine flow",
          "Recurrent urinary tract infections",
          "Kidney damage from prolonged obstruction",
          "Sepsis in severe, untreated infected obstructions (emergency)",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Advanced PCNL & Laser Techniques — high stone clearance rates with minimal scarring",
          "Free Follow-ups — post-surgery consultations included for 90 days",
          "No-Cost EMI — split your surgery cost into easy monthly instalments",
          "Verified Urologists — experienced in complex and recurrent stone cases",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Advanced PCNL & Laser Lithotripsy",
        description:
          "We use percutaneous nephrolithotomy (PCNL) and laser techniques for high stone-clearance rates with minimally invasive access.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced Urologists",
        description:
          "Our urology specialists handle simple to complex and recurrent kidney stone cases with consistently high success rates.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "Short Hospital Stay",
        description:
          "Most kidney stone procedures require just 1-3 days of hospital stay, with a quick return to normal activity.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Cashless Insurance & Free Follow-ups",
        description:
          "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "Ultrasound (KUB) to detect stones",
      "CT scan (KUB) for precise stone size and location",
      "Urine and blood tests to assess kidney function",
      "Stone composition analysis (if stone is passed or removed)",
    ],
    procedureSteps: [
      "General or spinal anaesthesia depending on the procedure",
      "Small puncture access to the kidney (PCNL) or scope via the natural urinary tract (URS)",
      "Laser or mechanical fragmentation of the stone",
      "Placement of a temporary stent if required for healing",
    ],
    postOpDo: [
      "Drink plenty of water to flush the urinary tract",
      "Take prescribed pain relief and antibiotics on schedule",
      "Attend your follow-up visit for stent removal, if placed",
      "Get stone composition tested to prevent recurrence",
    ],
    postOpDont: [
      "Don't lift heavy weights for 2-3 weeks",
      "Don't ignore fever or worsening pain — call us immediately",
      "Don't skip your prescribed medication schedule",
      "Don't delay your stent removal appointment, if applicable",
    ],
    testimonials: [
      {
        quote:
          "“The kidney stone pain was unbearable but the PCNL procedure gave me complete relief. Recovery was faster than I expected.”",
        name: "A. Verma",
        role: "Yelahanka, Bangalore",
      },
      {
        quote:
          "“Excellent care from diagnosis to surgery. The urologist explained the procedure clearly and the team was very supportive.”",
        name: "R. Iyer",
        role: "Electronic City, Bangalore",
      },
      {
        quote:
          "“Cashless insurance and transparent pricing made this a stress-free experience during a painful time.”",
        name: "D. Shetty",
        role: "Malleswaram, Bangalore",
      },
    ],
    faqs: [
      {
        q: "Is PCNL surgery painful?",
        a: "PCNL is performed under general or spinal anaesthesia, so you won't feel pain during the procedure. Mild discomfort after surgery is normal and managed with medication.",
      },
      {
        q: "How long does recovery take after kidney stone surgery?",
        a: "Most patients are discharged within 1-3 days and return to normal activities within 1-2 weeks, depending on the procedure and stone complexity.",
      },
      {
        q: "Is kidney stone surgery covered by insurance?",
        a: "Yes, kidney stone procedures like PCNL and URS are covered by most health insurance plans in India. We assist with cashless claims across 15+ insurance partners.",
      },
      {
        q: "Will kidney stones come back after treatment?",
        a: "Kidney stones can recur, especially without dietary changes and adequate hydration. Stone composition testing helps your doctor recommend targeted prevention steps.",
      },
      {
        q: "What is the difference between PCNL and URS?",
        a: "PCNL involves a small puncture through the back to access larger kidney stones directly, while URS uses a scope passed through the natural urinary tract for smaller stones, typically in the ureter. Your urologist will recommend the best option based on stone size and location.",
      },
    ],
    metaTitle: "Kidney Stone Surgery in Bangalore | PCNL & Laser Treatment — Doctor247",
    metaDescription:
      "Best kidney stone treatment in Bangalore starting at ₹90,000. Advanced PCNL & laser lithotripsy by expert urologists, cashless insurance, quick recovery.",
    metaKeywords:
      "kidney stone surgery in bangalore, PCNL surgery cost bangalore, laser kidney stone treatment, best urologist bangalore, kidney stone removal cost",
  },

  "knee-replacement": {
    slug: "knee-replacement",
    name: "Knee Replacement Surgery",
    shortName: "Knee Arthritis",
    price: "₹1,80,000",
    heroDescription:
      "Advanced total and partial knee replacement surgery for lasting pain relief and mobility. Expert orthopedic surgeons, cashless insurance, no-cost EMI, and structured physiotherapy support in Bangalore.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.8", label: "Patient Rating" },
      { value: "4,000+", label: "Knee Replacements Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What is Knee Arthritis?",
    aboutParagraphs: [
      "Knee arthritis is the wearing down of cartilage in the knee joint, causing pain, stiffness, and swelling that gradually worsens over time. It is most common in people over 50 but can also affect younger patients due to injury or genetics.",
      "When medication, physiotherapy, and lifestyle changes no longer control the pain, knee replacement surgery can restore mobility and quality of life. Doctor247 connects you with experienced orthopedic surgeons for safe, effective knee replacement in Bangalore.",
    ],
    overviewTabs: [
      {
        label: "When to choose Knee Replacement?",
        items: [
          "Persistent knee pain that limits walking, climbing stairs, or daily activities",
          "Pain that doesn't improve with medication, injections, or physiotherapy",
          "Visible knee deformity or stiffness affecting movement",
          "Pain that disturbs sleep or worsens in cold or damp weather",
        ],
      },
      {
        label: "Preventing Knee Arthritis",
        items: [
          "Maintain a healthy body weight to reduce joint stress",
          "Stay active with low-impact exercises like swimming or cycling",
          "Strengthen the muscles around the knee joint",
          "Avoid repetitive high-impact activities that strain the knee",
        ],
      },
      {
        label: "Complications if Untreated",
        items: [
          "Progressive loss of mobility and independence",
          "Muscle weakness from reduced activity",
          "Compensatory pain in the hips, back, or other knee",
          "Increased risk of falls due to instability",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Advanced Implants & Techniques — long-lasting implants for better mobility",
          "Free Follow-ups & Physiotherapy Support — included for 90 days",
          "No-Cost EMI — split your surgery cost into easy monthly instalments",
          "Verified Orthopedic Surgeons — experienced in total and partial knee replacement",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Advanced Knee Implants",
        description:
          "We use high-quality, long-lasting knee implants suited to your activity level, helping restore natural movement and reduce pain.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced Orthopedic Surgeons",
        description:
          "Our orthopedic surgeons have performed thousands of total and partial knee replacements with consistently high success rates.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "Structured Physiotherapy Support",
        description:
          "A guided physiotherapy plan after surgery helps you regain strength and mobility faster, with home visits available.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Cashless Insurance & Free Follow-ups",
        description:
          "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "X-ray of the knee joint to assess cartilage and bone damage",
      "MRI scan for detailed soft-tissue evaluation, if needed",
      "Blood tests and cardiac fitness assessment before surgery",
      "Physical mobility and gait assessment",
    ],
    procedureSteps: [
      "Spinal or general anaesthesia depending on your case",
      "Removal of damaged cartilage and bone from the knee joint",
      "Placement of a metal and plastic implant to replace the joint surface",
      "Procedure typically completed within 1-2 hours",
    ],
    postOpDo: [
      "Start guided physiotherapy as advised, usually within 24-48 hours",
      "Take prescribed pain relief and blood thinners on schedule",
      "Use walking aids as recommended until you regain strength",
      "Attend all follow-up visits to track healing progress",
    ],
    postOpDont: [
      "Don't skip your physiotherapy sessions",
      "Don't kneel or twist the knee forcefully in early recovery",
      "Don't ignore swelling, redness, or fever — call us immediately",
      "Don't resume high-impact activities without your surgeon's clearance",
    ],
    testimonials: [
      {
        quote:
          "“Years of knee pain made simple things difficult. After the surgery and physiotherapy, I can walk without pain for the first time in a decade.”",
        name: "G. Menon",
        role: "Jayanagar, Bangalore",
      },
      {
        quote:
          "“The surgeon and physiotherapy team worked together closely. My recovery plan was clear from day one.”",
        name: "L. Pillai",
        role: "Whitefield, Bangalore",
      },
      {
        quote:
          "“No-cost EMI made this affordable for my parents. The whole process was well organised and transparent.”",
        name: "S. Achar",
        role: "RT Nagar, Bangalore",
      },
    ],
    faqs: [
      {
        q: "How painful is knee replacement surgery?",
        a: "The surgery itself is pain-free under anaesthesia. Post-operative pain is managed with medication and typically decreases significantly within a few weeks as physiotherapy progresses.",
      },
      {
        q: "How long does recovery take after knee replacement?",
        a: "Most patients start walking with support within 1-2 days and return to most daily activities within 6-8 weeks, with full recovery over 3-6 months alongside physiotherapy.",
      },
      {
        q: "Is knee replacement surgery covered by insurance?",
        a: "Yes, knee replacement is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
      },
      {
        q: "How long do knee implants last?",
        a: "Modern knee implants typically last 15-20 years or more, depending on activity level, weight, and adherence to post-surgery care guidelines.",
      },
      {
        q: "What is the difference between total and partial knee replacement?",
        a: "Total knee replacement replaces the entire joint surface, while partial replacement only replaces the damaged portion, preserving healthy bone. Your surgeon will recommend the best option based on the extent of your arthritis.",
      },
    ],
    metaTitle: "Knee Replacement Surgery in Bangalore | Total & Partial TKR — Doctor247",
    metaDescription:
      "Best knee replacement surgery in Bangalore starting at ₹1,80,000. Expert orthopedic surgeons, advanced implants, cashless insurance, physiotherapy support.",
    metaKeywords:
      "knee replacement surgery in bangalore, total knee replacement cost bangalore, best orthopedic surgeon bangalore, knee arthritis treatment, TKR surgery cost",
  },

  cataract: {
    slug: "cataract",
    name: "Cataract Surgery",
    shortName: "Cataract",
    price: "Book Consultation",
    heroDescription:
      "Advanced phacoemulsification cataract surgery with premium IOL options for clear, spectacle-free vision. Expert ophthalmologists, cashless insurance, and same-day discharge in Bangalore.",
    heroImage: "/surgery-harnia.png",
    stats: [
      { value: "4.9", label: "Patient Rating" },
      { value: "12,000+", label: "Cataract Surgeries Done" },
      { value: "25+", label: "Partner Hospitals" },
      { value: "15+", label: "Insurance Partners" },
    ],
    aboutTitle: "What is a Cataract?",
    aboutParagraphs: [
      "A cataract is a clouding of the natural lens inside the eye, causing blurry vision, glare, and difficulty seeing at night. It usually develops slowly with age but can also occur due to injury, diabetes, or prolonged steroid use.",
      "Cataracts cannot be treated with glasses or medication once they significantly affect vision — surgery is the only effective treatment. Doctor247 connects you with experienced ophthalmologists offering advanced, minimally invasive cataract surgery in Bangalore.",
    ],
    overviewTabs: [
      {
        label: "When to choose Cataract surgery?",
        items: [
          "Blurry, cloudy, or dim vision that affects daily activities",
          "Increased sensitivity to glare, especially while driving at night",
          "Frequent changes in eyeglass or contact lens prescription",
          "Colors appearing faded or yellowed",
        ],
      },
      {
        label: "Preventing Cataracts",
        items: [
          "Wear UV-protective sunglasses when outdoors",
          "Manage diabetes and blood sugar levels well",
          "Avoid smoking and limit alcohol consumption",
          "Get regular eye check-ups after age 40",
        ],
      },
      {
        label: "Complications if Untreated",
        items: [
          "Progressive vision loss affecting independence",
          "Increased risk of falls and accidents",
          "Difficulty driving safely, especially at night",
          "In advanced cases, increased eye pressure (glaucoma risk)",
        ],
      },
      {
        label: "Why Doctor247?",
        items: [
          "Advanced Phacoemulsification — bladeless, stitchless cataract removal",
          "Premium IOL Options — for spectacle-free vision after surgery",
          "No-Cost EMI — split your surgery cost into easy monthly instalments",
          "Verified Ophthalmologists — experienced in advanced cataract procedures",
        ],
      },
    ],
    whyChooseNumbered: [
      {
        number: "01",
        title: "Bladeless Phacoemulsification",
        description:
          "We use advanced, stitchless phacoemulsification technology to remove the cloudy lens through a tiny incision, minimizing recovery time.",
        bg: BG_CYCLE[0],
      },
      {
        number: "02",
        title: "Experienced Ophthalmologists",
        description:
          "Our eye surgeons have performed thousands of cataract procedures with consistently excellent visual outcomes.",
        bg: BG_CYCLE[1],
      },
      {
        number: "03",
        title: "Premium IOL Options",
        description:
          "Choose from monofocal, multifocal, or toric intraocular lenses (IOLs) for the best possible vision suited to your lifestyle.",
        bg: BG_CYCLE[2],
      },
      {
        number: "04",
        title: "Same-Day Discharge",
        description:
          "Cataract surgery at Doctor247 is a quick day-care procedure — you can go home the same day with a follow-up the next morning.",
        bg: BG_CYCLE[3],
      },
    ],
    diagnosticTests: [
      "Visual acuity test to assess vision clarity",
      "Slit-lamp examination of the lens and eye structures",
      "Biometry to determine the correct IOL power",
      "Retina evaluation to rule out other eye conditions",
    ],
    procedureSteps: [
      "Local anaesthesia (eye drops) — no injections in most cases",
      "A tiny incision is made and the cloudy lens is broken up using ultrasound (phacoemulsification)",
      "The cloudy lens is removed and replaced with a clear artificial IOL",
      "Procedure typically completed within 15-20 minutes per eye",
    ],
    postOpDo: [
      "Use prescribed eye drops exactly as directed",
      "Wear the protective eye shield while sleeping for the first week",
      "Attend your follow-up visit the day after surgery",
      "Wear sunglasses outdoors to protect your eyes from glare",
    ],
    postOpDont: [
      "Don't rub or press on the operated eye",
      "Don't get water or soap directly into the eye while bathing",
      "Don't drive until your surgeon confirms your vision has stabilised",
      "Don't skip your prescribed eye drop schedule",
    ],
    testimonials: [
      {
        quote:
          "“I could barely read the newspaper before surgery. The very next day, my vision was remarkably clear. Truly a life-changing procedure.”",
        name: "M. Bhat",
        role: "Malleswaram, Bangalore",
      },
      {
        quote:
          "“Quick, painless, and same-day discharge as promised. The premium lens option means I barely need glasses now.”",
        name: "J. Fernandes",
        role: "Frazer Town, Bangalore",
      },
      {
        quote:
          "“Excellent care for my elderly mother's cataract surgery. The team was patient and explained every step to our family.”",
        name: "R. Krishnan",
        role: "Basavanagudi, Bangalore",
      },
    ],
    faqs: [
      {
        q: "Is cataract surgery painful?",
        a: "No, cataract surgery is performed under local anaesthesia (eye drops) and is virtually painless. Most patients feel only mild pressure during the procedure.",
      },
      {
        q: "How long does recovery take after cataract surgery?",
        a: "Vision typically improves within 24-48 hours, with full stabilisation over 2-4 weeks. Most patients resume normal activities within a few days.",
      },
      {
        q: "Is cataract surgery covered by insurance?",
        a: "Yes, cataract surgery is covered by most health insurance plans in India, including basic IOLs. We assist with cashless claims across 15+ insurance partners.",
      },
      {
        q: "Will I still need glasses after cataract surgery?",
        a: "This depends on the IOL you choose. Premium multifocal or toric lenses can significantly reduce dependence on glasses, while standard monofocal lenses may still require reading glasses.",
      },
      {
        q: "Can both eyes be operated on the same day?",
        a: "Most surgeons prefer operating on one eye at a time, with the second eye done after 1-2 weeks, to monitor healing and reduce infection risk.",
      },
    ],
    metaTitle: "Cataract Surgery in Bangalore | Phacoemulsification & Premium IOL — Doctor247",
    metaDescription:
      "Best cataract surgery in Bangalore with advanced phacoemulsification and premium IOL options. Expert ophthalmologists, cashless insurance, same-day discharge.",
    metaKeywords:
      "cataract surgery in bangalore, cataract operation cost bangalore, best eye doctor in bangalore, phacoemulsification surgery, premium IOL lens cost",
  },

  "appendix-surgery": {
  slug: "appendix-surgery",
  name: "Appendix Surgery (Appendicectomy)",
  shortName: "Appendix",
  price: "₹50,000",
  heroDescription:
    "Safe, minimally invasive laparoscopic appendicectomy for adults and children with same-day discharge, cashless insurance, and free follow-ups. Get expert appendix treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "7,500+", label: "Appendix Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Appendicitis?",
  aboutParagraphs: [
    "Appendicitis is the inflammation of the appendix, a small finger-shaped pouch attached to the large intestine. It typically occurs when the appendix becomes blocked by stool, a foreign body, or infection, leading to swelling, pain, and potentially life-threatening complications if left untreated.",
    "The standard treatment for appendicitis is surgical removal of the appendix, known as an appendicectomy. Doctor247 connects you with experienced general surgeons across Bangalore for safe, affordable appendix surgery with minimally invasive laparoscopic techniques.",
  ],
  overviewTabs: [
    {
      label: "When to choose Appendix surgery?",
      items: [
        "Sudden pain that begins around the navel and shifts to the lower right abdomen",
        "Pain that worsens with coughing, walking, or sudden movements",
        "Nausea, vomiting, and loss of appetite following abdominal pain",
        "Fever that rises as the pain intensifies (emergency sign)",
      ],
    },
    {
      label: "Preventing Appendicitis",
      items: [
        "Maintain a high-fibre diet with plenty of fruits and vegetables",
        "Stay well-hydrated to keep the digestive system functioning properly",
        "Avoid processed foods that can lead to constipation",
        "Pay attention to early symptoms and seek prompt medical care",
      ],
    },
    {
      label: "Complications of Appendicitis",
      items: [
        "Perforation — appendix bursts, spreading infection into the abdomen",
        "Peritonitis — severe inflammation of the abdominal lining (emergency)",
        "Abscess formation — a pocket of pus around the appendix",
        "Sepsis — life-threatening infection spreading through the body",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — smaller incisions, less pain, faster recovery, minimal scarring",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in laparoscopic procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Appendicectomy",
      description:
        "We use minimally invasive keyhole surgery with 2-3 tiny incisions to remove the appendix, resulting in less post-operative pain, shorter hospital stay, and quicker return to daily activities.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing appendix surgeries with consistently high success rates and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Safe for Adults & Children",
      description:
        "Our surgical team is skilled in both adult and pediatric appendicectomy, ensuring age-appropriate care and anaesthesia protocols for every patient.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete recovery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination and medical history assessment",
    "Abdominal ultrasound to visualize the appendix",
    "CT scan for accurate diagnosis in complex or atypical cases",
    "Blood tests to check for elevated white blood cell count (infection marker)",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "2-3 small keyhole incisions in the abdomen",
    "Laparoscopic removal of the inflamed appendix using a camera and specialized instruments",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Take prescribed pain relief and antibiotics on schedule",
    "Start with light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 2-3 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, increasing pain, or wound redness — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“My 9-year-old son needed emergency appendix surgery and Doctor247 made the whole experience stress-free. The surgeons were excellent with children and recovery was smooth.”",
      name: "P. Krishnan",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I had severe abdominal pain and was diagnosed with appendicitis. The laparoscopic surgery was quick, and I was back to light work within a week. Great care and transparent pricing.”",
      name: "R. Menon",
      role: "HSR Layout, Bangalore",
    },
    {
      quote:
        "“The team handled my insurance claim seamlessly. No hidden costs, exactly as quoted, and the 90-day free follow-ups gave me complete peace of mind.”",
      name: "S. Nair",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is appendix surgery painful?",
      a: "The surgery itself is completely painless under anaesthesia. Most patients experience mild discomfort for a few days, well managed with prescribed pain medication. Laparoscopic surgery generally causes significantly less post-operative pain than open surgery.",
    },
    {
      q: "How long does appendix removal recovery take?",
      a: "Most patients are discharged within 1-2 days after surgery and return to light daily activities within a week. Full recovery, including return to exercise and heavy work, typically takes 2-3 weeks.",
    },
    {
      q: "Is appendix surgery covered by insurance?",
      a: "Yes, appendicectomy is covered by most health insurance plans in India, including emergency and planned procedures. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can you live a normal life without an appendix?",
      a: "Yes, the appendix is not essential for survival. Most people live completely normal, healthy lives after its removal with no long-term digestive issues or lifestyle changes needed.",
    },
    {
      q: "What is the difference between laparoscopic and open appendix surgery?",
      a: "Laparoscopic (keyhole) surgery uses small incisions and typically offers less pain, faster recovery, and minimal scarring. Open surgery involves a larger single incision and may be recommended for complicated or perforated appendix cases. Your surgeon will recommend the safest option based on your condition.",
    },
  ],
  metaTitle: "Appendix Surgery in Bangalore | Laparoscopic Appendicectomy — Doctor247",
  metaDescription:
    "Best appendix surgery (appendicectomy) in Bangalore starting at ₹50,000. Laparoscopic appendix removal for adults & children, cashless insurance, no-cost EMI, quick recovery.",
  metaKeywords:
    "appendix surgery in bangalore, appendicectomy cost bangalore, laparoscopic appendicectomy, best general surgeon bangalore, appendix removal surgery cost, appendix operation price",
},
"laparoscopic-appendix-surgery": {
  slug: "laparoscopic-appendix-surgery",
  name: "Laparoscopic Appendicectomy (Pediatric/Adult)",
  shortName: "Appendix",
  price: "₹65,000",
  heroDescription:
    "Safe, advanced laparoscopic appendicectomy for adults and children with tiny incisions, same-day discharge, cashless insurance, and free follow-ups. Get expert appendix treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "7,500+", label: "Appendix Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Appendicitis?",
  aboutParagraphs: [
    "Appendicitis is the inflammation of the appendix, a small finger-shaped pouch attached to the large intestine. It typically occurs when the appendix becomes blocked by stool, a foreign body, or infection, leading to swelling, pain, and potentially life-threatening complications if left untreated.",
    "The standard treatment for appendicitis is surgical removal of the appendix, known as an appendicectomy. Doctor247 connects you with experienced general surgeons across Bangalore for safe, affordable appendix surgery with minimally invasive laparoscopic techniques.",
  ],
  overviewTabs: [
    {
      label: "When to choose Appendix surgery?",
      items: [
        "Sudden pain that begins around the navel and shifts to the lower right abdomen",
        "Pain that worsens with coughing, walking, or sudden movements",
        "Nausea, vomiting, and loss of appetite following abdominal pain",
        "Fever that rises as the pain intensifies (emergency sign)",
      ],
    },
    {
      label: "Preventing Appendicitis",
      items: [
        "Maintain a high-fibre diet with plenty of fruits and vegetables",
        "Stay well-hydrated to keep the digestive system functioning properly",
        "Avoid processed foods that can lead to constipation",
        "Pay attention to early symptoms and seek prompt medical care",
      ],
    },
    {
      label: "Complications of Appendicitis",
      items: [
        "Perforation — appendix bursts, spreading infection into the abdomen",
        "Peritonitis — severe inflammation of the abdominal lining (emergency)",
        "Abscess formation — a pocket of pus around the appendix",
        "Sepsis — life-threatening infection spreading through the body",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — 2-3 tiny incisions, less pain, faster recovery, minimal scarring",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Appendicectomy",
      description:
        "We use minimally invasive keyhole surgery with 2-3 tiny incisions to remove the appendix, resulting in less post-operative pain, shorter hospital stay, and quicker return to daily activities.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing appendix surgeries with consistently high success rates and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Safe for Adults & Children",
      description:
        "Our surgical team is skilled in both adult and pediatric appendicectomy, ensuring age-appropriate care and anaesthesia protocols for every patient.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete recovery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination and medical history assessment",
    "Abdominal ultrasound to visualize the appendix",
    "CT scan for accurate diagnosis in complex or atypical cases",
    "Blood tests to check for elevated white blood cell count (infection marker)",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "2-3 small keyhole incisions in the abdomen",
    "Laparoscopic removal of the inflamed appendix using a camera and specialized instruments",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Take prescribed pain relief and antibiotics on schedule",
    "Start with light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 2-3 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, increasing pain, or wound redness — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“My 9-year-old son needed emergency appendix surgery and Doctor247 made the whole experience stress-free. The laparoscopic procedure meant he was home in 2 days with minimal discomfort.”",
      name: "P. Krishnan",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I had severe abdominal pain and was diagnosed with appendicitis. The laparoscopic surgery was quick, and I was back to light work within a week. Great care and transparent pricing.”",
      name: "R. Menon",
      role: "HSR Layout, Bangalore",
    },
    {
      quote:
        "“The team handled my insurance claim seamlessly. No hidden costs, exactly as quoted, and the 90-day free follow-ups gave me complete peace of mind.”",
      name: "S. Nair",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic appendix surgery painful?",
      a: "The surgery itself is completely painless under anaesthesia. Laparoscopic appendicectomy causes significantly less post-operative pain than open surgery, with most patients experiencing only mild discomfort managed easily with prescribed medication.",
    },
    {
      q: "How long does recovery take after laparoscopic appendicectomy?",
      a: "Most patients are discharged within 1-2 days and return to light daily activities within a week. Full recovery, including return to exercise and heavy work, typically takes 2-3 weeks.",
    },
    {
      q: "Is appendix surgery covered by insurance?",
      a: "Yes, appendicectomy is covered by most health insurance plans in India, including emergency and planned procedures. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can you live a normal life without an appendix?",
      a: "Yes, the appendix is not essential for survival. Most people live completely normal, healthy lives after its removal with no long-term digestive issues or lifestyle changes needed.",
    },
    {
      q: "Is laparoscopic appendicectomy safe for children?",
      a: "Yes, laparoscopic appendicectomy is considered the gold standard for both adults and children. It offers the same benefits — less pain, faster recovery, and minimal scarring — for pediatric patients, with age-appropriate anaesthesia and care protocols.",
    },
  ],
  metaTitle: "Laparoscopic Appendicectomy in Bangalore | Appendix Surgery — Doctor247",
  metaDescription:
    "Best laparoscopic appendicectomy in Bangalore starting at ₹65,000. Advanced appendix removal for adults & children, cashless insurance, no-cost EMI, quick recovery.",
  metaKeywords:
    "laparoscopic appendicectomy in bangalore, appendix surgery cost bangalore, appendix removal surgery, pediatric appendicectomy, best general surgeon bangalore, appendicectomy price",
},

"open-cholecystectomy": {
  slug: "open-cholecystectomy",
  name: "Open Cholecystectomy (Pediatric/Adult)",
  shortName: "Open Gallbladder",
  price: "₹60,000",
  heroDescription:
    "Safe, effective open gallbladder removal surgery for adults and children with expert surgical care, cashless insurance, and free follow-ups. Get relief from gallstones with experienced surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "4,500+", label: "Open Cholecystectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Gallbladder Stones?",
  aboutParagraphs: [
    "Gallstones are hardened deposits of digestive fluid that form inside the gallbladder, a small organ beneath the liver. They can range from tiny grain-like particles to golf-ball sized stones, and often cause pain, especially after fatty meals.",
    "Open cholecystectomy is the traditional surgical removal of the gallbladder through a single larger incision. It is recommended for complex cases, severely inflamed gallbladders, or when laparoscopic surgery is not feasible. Doctor247 connects you with experienced surgeons for safe open gallbladder surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Open Gallbladder surgery?",
      items: [
        "Recurrent, sharp pain in the upper right abdomen (biliary colic)",
        "Severely inflamed or infected gallbladder (acute cholecystitis)",
        "Large or multiple gallstones that cannot be removed laparoscopically",
        "Previous abdominal surgeries that make laparoscopic approach risky",
      ],
    },
    {
      label: "Preventing Gallstones",
      items: [
        "Maintain a healthy body weight and avoid rapid weight loss",
        "Eat a balanced diet with healthy fats and fibre",
        "Stay physically active with regular exercise",
        "Avoid prolonged fasting or crash diets",
    ],
    },
    {
      label: "Complications of Gallstones",
      items: [
        "Acute cholecystitis — inflammation and infection of the gallbladder",
        "Blocked bile duct leading to jaundice",
        "Acute pancreatitis if a stone blocks the pancreatic duct",
        "Gallbladder perforation in severe, untreated cases",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Open Surgical Technique — safe, reliable approach for complex gallbladder cases",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in open biliary surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Safe Open Surgical Technique",
      description:
        "Our surgeons use meticulous open surgical techniques for gallbladder removal, ensuring complete clearance of stones and safe management of complex or inflamed cases.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing open cholecystectomies with consistently high success rates and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Safe for Adults & Children",
      description:
        "Our surgical team is skilled in both adult and pediatric open cholecystectomy, ensuring age-appropriate care and anaesthesia protocols for every patient.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete recovery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Abdominal ultrasound to detect gallstones",
    "Blood tests to check liver function and infection markers",
    "CT scan or MRCP for complex cases",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "A single 4-6 inch incision in the upper right abdomen",
    "Careful removal of the gallbladder and stones under direct vision",
    "Closure of the incision — procedure typically completed within 60-90 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Take prescribed pain relief and antibiotics on schedule",
    "Follow a light, low-fat diet for the first few weeks",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't eat heavy, oily, or fried food immediately after surgery",
    "Don't lift heavy weights for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't ignore fever, yellowing of eyes/skin, or severe pain — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“My gallbladder was severely inflamed and laparoscopic surgery wasn't possible. The open surgery was done expertly and I'm now completely pain-free. The recovery was well managed.”",
      name: "L. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My elderly mother needed open gallbladder removal due to complex stones. The surgeon was experienced and explained everything clearly. Great post-op care.”",
      name: "V. Reddy",
      role: "Basavanagudi, Bangalore",
    },
    {
      quote:
        "“Affordable pricing and cashless insurance made the whole experience stress-free. The team followed up regularly to check on my recovery. Highly recommend Doctor247.”",
      name: "M. Krishnan",
      role: "Rajajinagar, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is open gallbladder surgery painful?",
      a: "The surgery itself is pain-free under anaesthesia. Post-operative pain is managed with medication and typically decreases significantly within a few weeks. While open surgery involves a larger incision than laparoscopic, the pain is well controlled with modern pain management protocols.",
    },
    {
      q: "How long does recovery take after open cholecystectomy?",
      a: "Most patients stay in the hospital for 2-3 days and return to light daily activities within 2-3 weeks. Full recovery, including return to heavy work and exercise, typically takes 4-6 weeks.",
    },
    {
      q: "Is gallbladder removal covered by insurance?",
      a: "Yes, open cholecystectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can I live a normal life without a gallbladder?",
      a: "Yes, the liver continues to produce bile even after the gallbladder is removed. Most people digest food normally, though some may need to moderate fatty food intake initially.",
    },
    {
      q: "When is open surgery preferred over laparoscopic?",
      a: "Open cholecystectomy is recommended for patients with severe inflammation, large or complex stones, previous abdominal surgeries, or conditions that make laparoscopic access risky. Your surgeon will recommend the safest option based on your specific case.",
    },
  ],
  metaTitle: "Open Cholecystectomy in Bangalore | Gallbladder Surgery — Doctor247",
  metaDescription:
    "Best open gallbladder removal surgery in Bangalore starting at ₹60,000. Expert open cholecystectomy for adults & children, cashless insurance, no-cost EMI, safe recovery.",
  metaKeywords:
    "open cholecystectomy in bangalore, gallbladder surgery cost bangalore, open gallbladder removal, best surgeon for gallbladder surgery, cholecystectomy price, gallstone operation cost",
},

"laparoscopic-cholecystectomy": {
  slug: "laparoscopic-cholecystectomy",
  name: "Laparoscopic Cholecystectomy (Pediatric/Adult)",
  shortName: "Lap Gallbladder",
  price: "₹70,000",
  heroDescription:
    "Advanced laparoscopic gallbladder removal surgery for adults and children with tiny incisions, faster recovery, cashless insurance, and free follow-ups. Get expert gallstone treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "6,500+", label: "Lap Cholecystectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Gallbladder Stones?",
  aboutParagraphs: [
    "Gallstones are hardened deposits of digestive fluid that form inside the gallbladder, a small organ beneath the liver. They can range from tiny grain-like particles to golf-ball sized stones, and often cause pain, especially after fatty meals.",
    "Laparoscopic cholecystectomy is the gold standard for gallbladder removal, using minimally invasive keyhole surgery with 3-4 tiny incisions. It offers less pain, faster recovery, and minimal scarring. Doctor247 connects you with experienced surgeons for safe, advanced laparoscopic gallbladder surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Gallbladder surgery?",
      items: [
        "Recurrent, sharp pain in the upper right abdomen (biliary colic)",
        "Pain after eating fatty or oily food",
        "Nausea, vomiting, or bloating linked to gallstone attacks",
        "Jaundice or fever suggesting infection or blocked bile duct",
      ],
    },
    {
      label: "Preventing Gallstones",
      items: [
        "Maintain a healthy body weight and avoid rapid weight loss",
        "Eat a balanced diet with healthy fats and fibre",
        "Stay physically active with regular exercise",
        "Avoid prolonged fasting or crash diets",
      ],
    },
    {
      label: "Complications of Gallstones",
      items: [
        "Acute cholecystitis — inflammation and infection of the gallbladder",
        "Blocked bile duct leading to jaundice",
        "Acute pancreatitis if a stone blocks the pancreatic duct",
        "Gallbladder perforation in severe, untreated cases",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — 3-4 tiny incisions, less pain, faster healing, minimal scarring",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in advanced laparoscopy",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Cholecystectomy",
      description:
        "We use keyhole surgery with 3-4 tiny incisions to remove the gallbladder, resulting in less post-operative pain, shorter hospital stay, and much faster recovery than open surgery.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Laparoscopic Surgeons",
      description:
        "Our surgeons have performed thousands of laparoscopic gallbladder removal procedures with consistently high success rates and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Safe for Adults & Children",
      description:
        "Our surgical team is skilled in both adult and pediatric laparoscopic cholecystectomy, ensuring age-appropriate care and anaesthesia protocols for every patient.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete recovery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Abdominal ultrasound to detect gallstones",
    "Blood tests to check liver function and infection markers",
    "CT scan or MRCP for complex cases",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions in the abdomen",
    "Laparoscopic removal of the gallbladder using a camera and specialised instruments",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid recovery and prevent blood clots",
    "Follow a light, low-fat diet for the first few weeks",
    "Take prescribed pain relief and antibiotics on schedule",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't eat heavy, oily, or fried food immediately after surgery",
    "Don't lift heavy weights for 2-4 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't ignore fever, yellowing of eyes/skin, or severe pain — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had gallstone attacks for months before finally getting laparoscopic surgery. The procedure was quick, recovery was smooth, and I was back to work within a week.”",
      name: "K. Rao",
      role: "Basavanagudi, Bangalore",
    },
    {
      quote:
        "“My 12-year-old daughter needed gallbladder surgery and the laparoscopic approach meant she recovered quickly with minimal scarring. Excellent pediatric care.”",
      name: "N. D'Souza",
      role: "Bellandur, Bangalore",
    },
    {
      quote:
        "“Affordable pricing and cashless insurance made the whole experience stress-free. The 90-day free follow-ups gave us complete peace of mind.”",
      name: "T. Gowda",
      role: "Rajajinagar, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic gallbladder surgery painful?",
      a: "The surgery itself is pain-free under anaesthesia. Laparoscopic cholecystectomy causes significantly less post-operative pain than open surgery due to smaller incisions. Most patients experience only mild discomfort managed easily with prescribed medication.",
    },
    {
      q: "How long does recovery take after laparoscopic cholecystectomy?",
      a: "Most patients are discharged within 1-2 days and return to light daily activities within a week. Full recovery, including return to exercise and heavy work, typically takes 2-4 weeks.",
    },
    {
      q: "Is gallbladder surgery covered by insurance?",
      a: "Yes, laparoscopic cholecystectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can I live a normal life without a gallbladder?",
      a: "Yes, the liver continues to produce bile even after the gallbladder is removed. Most people digest food normally, though some may need to moderate fatty food intake initially.",
    },
    {
      q: "Is laparoscopic cholecystectomy safe for children?",
      a: "Yes, laparoscopic cholecystectomy is considered the gold standard for both adults and children when gallbladder removal is needed. It offers the same benefits — less pain, faster recovery, and minimal scarring — for pediatric patients with age-appropriate care protocols.",
    },
  ],
  metaTitle: "Laparoscopic Cholecystectomy in Bangalore | Gallbladder Surgery — Doctor247",
  metaDescription:
    "Best laparoscopic gallbladder removal surgery in Bangalore starting at ₹70,000. Advanced laparoscopic cholecystectomy for adults & children, cashless insurance, no-cost EMI, quick recovery.",
  metaKeywords:
    "laparoscopic cholecystectomy in bangalore, gallbladder surgery cost bangalore, laparoscopic gallbladder removal, best surgeon for gallbladder, cholecystectomy price, gallstone operation cost",
},
"circumcision": {
  slug: "circumcision",
  name: "Circumcision",
  shortName: "Circumcision",
  price: "₹20,000",
  heroDescription:
    "Safe, painless circumcision procedure for all ages with same-day discharge, cashless insurance, and free follow-ups. Get expert circumcision treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "5,000+", label: "Circumcisions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Circumcision?",
  aboutParagraphs: [
    "Circumcision is a surgical procedure that involves the removal of the foreskin (prepuce) covering the head of the penis. It is performed for various reasons including religious, cultural, medical (phimosis, recurrent infections), and personal hygiene preferences.",
    "The procedure is safe for all age groups from newborns to adults. Doctor247 connects you with experienced surgeons for safe, painless circumcision in Bangalore using modern surgical techniques with minimal discomfort and quick recovery.",
  ],
  overviewTabs: [
    {
      label: "When to choose Circumcision?",
      items: [
        "Phimosis — tight foreskin that cannot be retracted",
        "Recurrent balanitis — frequent infections of the foreskin",
        "Paraphimosis — retracted foreskin that cannot be pulled back",
        "Personal, religious, or cultural preference",
      ],
    },
    {
      label: "Benefits of Circumcision",
      items: [
        "Reduced risk of urinary tract infections (UTIs)",
        "Lower risk of penile cancer and STIs",
        "Easier hygiene and reduced risk of infections",
        "Prevention of phimosis and related complications",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Recurrent infections and inflammation (balanitis)",
        "Painful erections due to tight foreskin (phimosis)",
        "Difficulty with urination in severe phimosis",
        "Increased risk of STIs and penile health issues",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Surgical Techniques — laser and conventional options for minimal pain and bleeding",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in circumcision procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Painless & Safe Technique",
      description:
        "We use modern circumcision techniques with local anaesthesia and advanced instruments, ensuring minimal pain, reduced bleeding, and a comfortable experience.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgeons",
      description:
        "Our surgeons have performed thousands of circumcision procedures with consistently high success rates and excellent cosmetic outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Same-Day Discharge",
      description:
        "Circumcision at Doctor247 is a day-care procedure — you can go home the same day and resume normal activities within a few days.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the penis and foreskin",
    "Medical history assessment to rule out bleeding disorders",
    "Urine test if infection is suspected",
    "Pre-operative fitness assessment (for adults)",
  ],
  procedureSteps: [
    "Local anaesthesia for adults or general anaesthesia for children",
    "Removal of the foreskin using a surgical or laser technique",
    "Careful closure of the skin edges with dissolvable sutures or tissue glue",
    "Procedure typically completed within 20-40 minutes",
  ],
  postOpDo: [
    "Keep the surgical area clean and dry",
    "Apply prescribed antibiotic ointment as directed",
    "Wear loose, comfortable cotton underwear",
    "Attend your follow-up visit within 7 days for wound check",
  ],
  postOpDont: [
    "Don't engage in sexual activity for at least 4-6 weeks",
    "Don't soak the wound in water until fully healed",
    "Don't ignore excessive bleeding, swelling, or fever — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I was nervous about circumcision but the procedure was quick and painless. The surgeon was professional and the recovery was smooth. Highly recommend Doctor247.”",
      name: "A. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“My son needed circumcision and Doctor247 made the whole experience stress-free. The pediatric care was excellent and he recovered well.”",
      name: "S. Patel",
      role: "Whitefield, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and no hidden charges. The team handled everything professionally and the follow-ups were thorough.”",
      name: "R. Singh",
      role: "HSR Layout, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is circumcision painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during the surgery. Post-operative discomfort is mild and easily managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after circumcision?",
      a: "Most patients return to normal activities within 3-5 days. Complete healing takes about 2-4 weeks. Sexual activity should be avoided for 4-6 weeks as advised.",
    },
    {
      q: "Is circumcision covered by insurance?",
      a: "Yes, circumcision for medical reasons (phimosis, infections) is covered by most health insurance plans in India. We assist with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the best age for circumcision?",
      a: "Circumcision can be performed at any age. It is commonly done in newborns, children, and adults. Your surgeon will guide you based on your specific situation and medical needs.",
    },
    {
      q: "What is the difference between laser and conventional circumcision?",
      a: "Laser circumcision uses focused light energy to cut and seal tissues simultaneously, resulting in less bleeding, minimal pain, and faster healing. Conventional circumcision uses surgical instruments and sutures. Your surgeon will recommend the best option for you.",
    },
  ],
  metaTitle: "Circumcision in Bangalore | Safe & Painless Procedure — Doctor247",
  metaDescription:
    "Best circumcision in Bangalore starting at ₹20,000. Safe, painless procedure for all ages, same-day discharge, cashless insurance, expert surgeons.",
  metaKeywords:
    "circumcision in bangalore, circumcision cost bangalore, laser circumcision, circumcision surgery for adults, circumcision for children, best surgeon for circumcision",
},

"fissurectomy-sphincterotomy": {
  slug: "fissurectomy-sphincterotomy",
  name: "Fissurectomy with Sphincterotomy",
  shortName: "Fissure Surgery",
  price: "₹40,000",
  heroDescription:
    "Safe, effective fissurectomy with sphincterotomy for chronic anal fissures with same-day discharge, cashless insurance, and free follow-ups. Get lasting relief from anal pain and bleeding with expert proctologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "4,000+", label: "Fissure Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Anal Fissures?",
  aboutParagraphs: [
    "An anal fissure is a small tear or crack in the lining of the anus, often caused by passing hard stools, chronic constipation, or diarrhea. It can cause severe pain, bleeding, and spasm of the anal sphincter muscle, making bowel movements extremely uncomfortable.",
    "While acute fissures may heal with medication and lifestyle changes, chronic fissures often require surgery. Fissurectomy with sphincterotomy removes the fissure and relaxes the anal sphincter to promote healing. Doctor247 connects you with expert proctologists for safe, effective fissure surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Fissure Surgery?",
      items: [
        "Persistent anal pain during and after bowel movements",
        "Bleeding from the anus (bright red blood on toilet paper)",
        "Anal pain lasting more than 6 weeks despite medication",
        "Visible tear or crack in the anal lining with sphincter spasm",
      ],
    },
    {
      label: "Preventing Anal Fissures",
      items: [
        "Eat a high-fibre diet with plenty of fruits and vegetables",
        "Drink plenty of water to keep stools soft",
        "Avoid straining during bowel movements",
        "Maintain regular bowel habits and exercise",
      ],
    },
    {
      label: "Complications of Untreated Fissures",
      items: [
        "Chronic fissure that doesn't heal with medication",
        "Anal sphincter spasm causing worsening pain",
        "Infection or abscess formation",
        "Recurrent bleeding and discomfort affecting quality of life",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Fissurectomy & Sphincterotomy — precise surgical technique for lasting relief",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Proctologists — every surgeon is credential-checked with extensive experience in anorectal procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Fissurectomy & Sphincterotomy",
      description:
        "We use precise surgical techniques to remove the fissure and partially divide the anal sphincter muscle, relieving spasm and promoting complete healing with minimal discomfort.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Proctologists",
      description:
        "Our proctology specialists have performed thousands of fissure surgeries with consistently high success rates and excellent patient outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Same-Day Discharge",
      description:
        "Fissure surgery at Doctor247 is a day-care procedure — you can go home the same day and resume light activity within 2-3 days.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the anal area",
    "Visual inspection for visible fissure or tear",
    "Proctoscopy/anoscopy for detailed view of the anal canal",
    "Medical history assessment to rule out underlying conditions",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on patient preference",
    "Removal of the chronic fissure tissue (fissurectomy)",
    "Partial division of the internal anal sphincter (sphincterotomy) to reduce spasm",
    "Procedure typically completed within 20-30 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day for comfort and healing",
    "Eat a high-fibre diet and stay well hydrated",
    "Take prescribed stool softeners to avoid straining",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain during bowel movements",
    "Don't lift heavy weights for at least 2 weeks",
    "Don't ignore continued bleeding or fever — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“The pain from my fissure was unbearable for months. The surgery gave me immediate relief and recovery was smoother than I expected. Highly recommend Doctor247.”",
      name: "M. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I was scared of surgery but the team made me comfortable. The procedure was quick, pain was manageable, and I'm completely healed now.”",
      name: "S. Nair",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing, smooth insurance claim, and excellent post-op care. The 90-day follow-ups gave me great peace of mind.”",
      name: "R. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is fissure surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is managed with prescribed pain medication and typically decreases significantly within a few days.",
    },
    {
      q: "How long does recovery take after fissurectomy?",
      a: "Most patients return to normal activities within 3-5 days and complete healing takes 2-3 weeks. Full resolution of symptoms is usually achieved within 4-6 weeks.",
    },
    {
      q: "Is fissure surgery covered by insurance?",
      a: "Yes, fissurectomy with sphincterotomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will the fissure come back after surgery?",
      a: "Recurrence rates are very low after sphincterotomy when combined with dietary changes and good bowel habits. Following post-operative guidelines significantly reduces the risk.",
    },
    {
      q: "What is the difference between fissurectomy and sphincterotomy?",
      a: "Fissurectomy involves removing the chronic fissure tissue, while sphincterotomy involves partially dividing the anal sphincter muscle to relieve spasm and promote healing. Both are usually performed together for the best outcomes.",
    },
  ],
  metaTitle: "Fissurectomy with Sphincterotomy in Bangalore | Fissure Surgery — Doctor247",
  metaDescription:
    "Best fissure surgery in Bangalore starting at ₹40,000. Expert fissurectomy with sphincterotomy, same-day discharge, cashless insurance, expert proctologists.",
  metaKeywords:
    "fissure surgery in bangalore, fissurectomy cost bangalore, sphincterotomy, anal fissure treatment, best proctologist bangalore, fissure operation price",
},

"fistulectomy-low": {
  slug: "fistulectomy-low",
  name: "Fistulectomy - Low (Including Laser)",
  shortName: "Low Fistula Surgery",
  price: "₹40,000",
  heroDescription:
    "Advanced laser fistulectomy for low anal fistulas with minimal pain, faster healing, same-day discharge, cashless insurance, and free follow-ups. Get lasting relief from anal fistulas with expert proctologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Fistula Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Anal Fistula?",
  aboutParagraphs: [
    "An anal fistula is an abnormal tunnel or tract that forms between the inside of the anal canal and the skin around the anus. It usually develops after an anal abscess, and can cause persistent discharge, pain, and recurrent infections.",
    "Low fistulas are those that do not involve significant sphincter muscle and are ideal for laser treatment. Laser fistulectomy offers minimal pain, faster healing, and preserves sphincter function. Doctor247 connects you with expert proctologists for safe, advanced fistula surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Fistula Surgery?",
      items: [
        "Persistent discharge of pus or fluid from the anal area",
        "Recurrent anal pain and discomfort",
        "Swelling and irritation around the anus",
        "Previous anal abscess that has not healed completely",
      ],
    },
    {
      label: "Preventing Anal Fistulas",
      items: [
        "Treat anal abscesses promptly and completely",
        "Maintain good anal hygiene",
        "Eat a high-fibre diet to prevent constipation",
        "Avoid straining during bowel movements",
      ],
    },
    {
      label: "Complications of Untreated Fistulas",
      items: [
        "Recurrent infections and abscess formation",
        "Chronic discharge leading to skin irritation",
        "Fistula tract may become complex over time",
        "Risk of developing multiple tracts or deeper fistulas",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laser Fistulectomy — precise, minimally invasive technique with sphincter preservation",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Proctologists — every surgeon is credential-checked with extensive experience in laser fistula surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laser Fistulectomy",
      description:
        "We use precise laser technology to ablate the fistula tract with minimal tissue damage, preserving sphincter function and ensuring faster healing with less pain.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Proctologists",
      description:
        "Our proctology specialists have performed thousands of laser fistula surgeries with consistently high success rates and excellent patient outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Same-Day Discharge",
      description:
        "Laser fistulectomy at Doctor247 is a day-care procedure — you can go home the same day and resume light activity within 2-3 days.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the anal area",
    "Proctoscopy/anoscopy to visualize the fistula opening",
    "MRI or endoanal ultrasound for complex cases",
    "Medical history assessment to rule out underlying conditions",
  ],
  procedureSteps: [
    "Local or spinal anaesthesia depending on the case",
    "Identification of the fistula tract using a probe or fistula scope",
    "Laser ablation of the fistula tract to close it completely",
    "Procedure typically completed within 20-30 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day for comfort and healing",
    "Eat a high-fibre diet and stay well hydrated",
    "Take prescribed stool softeners to avoid straining",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain during bowel movements",
    "Don't lift heavy weights for at least 2 weeks",
    "Don't ignore excessive bleeding, fever, or severe pain — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had recurring infections from a fistula for months. The laser surgery was quick, nearly painless, and I'm completely healed now. Best decision I made.”",
      name: "A. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laser technique meant minimal pain and faster recovery than I expected. The team was professional and supportive throughout.”",
      name: "S. Kumar",
      role: "HSR Layout, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete confidence in my recovery.”",
      name: "R. Nair",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laser fistula surgery painful?",
      a: "Laser fistulectomy causes significantly less pain than conventional surgery as it involves minimal tissue damage. The procedure is performed under anaesthesia and post-operative discomfort is easily managed with prescribed medication.",
    },
    {
      q: "How long does recovery take after laser fistulectomy?",
      a: "Most patients return to normal activities within 3-5 days and complete healing takes 2-3 weeks. Laser surgery offers faster recovery compared to conventional techniques.",
    },
    {
      q: "Is fistula surgery covered by insurance?",
      a: "Yes, fistulectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will the fistula come back after laser surgery?",
      a: "Recurrence rates with laser fistulectomy are very low when performed on appropriate (low) fistulas. Following post-operative guidelines and maintaining good bowel habits further reduces the risk.",
    },
    {
      q: "What is the difference between low and high fistulas?",
      a: "Low fistulas do not involve significant sphincter muscle and are ideal for laser treatment with excellent success rates. High fistulas involve more sphincter muscle and may require more complex surgical approaches. Your surgeon will recommend the best option based on your case.",
    },
  ],
  metaTitle: "Laser Fistulectomy in Bangalore | Low Fistula Surgery — Doctor247",
  metaDescription:
    "Best laser fistula surgery in Bangalore starting at ₹40,000. Advanced laser fistulectomy for low anal fistulas, same-day discharge, cashless insurance, expert proctologists.",
  metaKeywords:
    "laser fistula surgery in bangalore, fistulectomy cost bangalore, low anal fistula treatment, laser fistulectomy, best proctologist bangalore, fistula operation price",
},

"fistulectomy-high": {
  slug: "fistulectomy-high",
  name: "Fistulectomy - High (Including Laser)",
  shortName: "High Fistula Surgery",
  price: "₹60,000",
  heroDescription:
    "Advanced laser fistulectomy for high anal fistulas with sphincter preservation, minimal pain, faster healing, cashless insurance, and free follow-ups. Get lasting relief from complex fistulas with expert proctologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,000+", label: "High Fistula Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a High Anal Fistula?",
  aboutParagraphs: [
    "A high anal fistula is an abnormal tunnel or tract that forms between the inside of the anal canal and the skin around the anus, passing through a significant portion of the anal sphincter muscle complex. It is more complex than low fistulas and requires specialized surgical expertise.",
    "High fistulas involve more sphincter muscle and require careful surgical planning to preserve continence. Advanced laser fistulectomy offers precise ablation of the fistula tract while minimizing sphincter damage. Doctor247 connects you with expert proctologists for safe, advanced high fistula surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose High Fistula Surgery?",
      items: [
        "Persistent discharge of pus or fluid from the anal area",
        "Recurrent anal pain, swelling, and discomfort",
        "Fistula tract that passes through significant sphincter muscle",
        "Previous failed fistula surgeries or recurrent fistulas",
      ],
    },
    {
      label: "Preventing Anal Fistulas",
      items: [
        "Treat anal abscesses promptly and completely",
        "Maintain good anal hygiene",
        "Eat a high-fibre diet to prevent constipation",
        "Avoid straining during bowel movements",
      ],
    },
    {
      label: "Complications of Untreated High Fistulas",
      items: [
        "Recurrent infections and abscess formation",
        "Fistula tract may become more complex over time",
        "Risk of developing multiple tracts",
        "Chronic pain and discharge affecting quality of life",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laser Fistulectomy — precise, minimally invasive technique with sphincter preservation for high fistulas",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Proctologists — every surgeon is credential-checked with extensive experience in complex fistula surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laser Fistulectomy for High Fistulas",
      description:
        "We use precise laser technology to ablate the fistula tract while carefully preserving sphincter function, ensuring complete healing with minimal risk of incontinence.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Expert Proctologists",
      description:
        "Our proctology specialists are experts in managing complex high fistulas with consistently high success rates and excellent patient outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimally Invasive with Sphincter Preservation",
      description:
        "Laser technique allows precise ablation of the fistula tract with minimal damage to surrounding sphincter muscle, preserving continence function.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the anal area",
    "Proctoscopy/anoscopy to visualize the fistula opening",
    "MRI or endoanal ultrasound for detailed mapping of the fistula tract",
    "Medical history assessment to rule out underlying conditions like Crohn's disease",
  ],
  procedureSteps: [
    "Spinal or general anaesthesia depending on the case",
    "Identification and mapping of the fistula tract using a probe and imaging",
    "Laser ablation of the high fistula tract with careful sphincter preservation",
    "Procedure typically completed within 30-45 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day for comfort and healing",
    "Eat a high-fibre diet and stay well hydrated",
    "Take prescribed stool softeners to avoid straining",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain during bowel movements",
    "Don't lift heavy weights for at least 3-4 weeks",
    "Don't ignore excessive bleeding, fever, or severe pain — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had a complex high fistula that required expert care. The laser surgery was successful and I'm completely healed with no issues. Grateful to the Doctor247 team.”",
      name: "V. Sharma",
      role: "Indiranagar, Bangalore",
    },
    {
      quote:
        "“I was worried about incontinence with my high fistula, but the laser technique preserved sphincter function perfectly. Recovery was smooth and pain was minimal.”",
      name: "P. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The team handled my complex case with great expertise. Transparent pricing, smooth insurance, and thorough follow-ups. Highly recommend Doctor247.”",
      name: "M. Reddy",
      role: "Jayanagar, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laser surgery safe for high fistulas?",
      a: "Yes, laser fistulectomy is safe and effective for high fistulas when performed by experienced proctologists. The laser allows precise ablation while preserving sphincter muscle, reducing the risk of incontinence.",
    },
    {
      q: "How long does recovery take after high fistula laser surgery?",
      a: "Most patients return to normal activities within 5-7 days and complete healing takes 3-4 weeks. High fistulas may require slightly longer recovery than low fistulas due to their complexity.",
    },
    {
      q: "Is high fistula surgery covered by insurance?",
      a: "Yes, high fistulectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will the high fistula come back after laser surgery?",
      a: "Recurrence rates for high fistulas are low when treated with laser ablation by experienced surgeons. Following post-operative guidelines and managing underlying conditions further reduces the risk.",
    },
    {
      q: "What is the difference between low and high fistula treatment?",
      a: "Low fistulas involve minimal sphincter muscle and can be treated with simpler approaches. High fistulas involve significant sphincter muscle and require advanced techniques like laser ablation with careful sphincter preservation. The cost and recovery time are typically higher for high fistulas due to their complexity.",
    },
  ],
  metaTitle: "Laser Fistulectomy for High Fistula in Bangalore | Complex Fistula Surgery — Doctor247",
  metaDescription:
    "Best laser fistula surgery for high anal fistulas in Bangalore starting at ₹60,000. Advanced laser fistulectomy with sphincter preservation, cashless insurance, expert proctologists.",
  metaKeywords:
    "high fistula surgery in bangalore, laser fistulectomy cost bangalore, complex anal fistula treatment, laser fistula surgery, best proctologist bangalore, fistula operation price",
},

"haemorrhoidectomy": {
  slug: "haemorrhoidectomy",
  name: "Haemorrhoidectomy - (Stapler / Routine)",
  shortName: "Haemorrhoidectomy",
  price: "₹45,000",
  heroDescription:
    "Safe, effective haemorrhoidectomy using stapler or routine techniques for grade III & IV piles with cashless insurance, no-cost EMI, and free follow-ups. Get lasting relief from severe hemorrhoids with expert proctologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "4,500+", label: "Haemorrhoidectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Haemorrhoids (Piles)?",
  aboutParagraphs: [
    "Haemorrhoids, also known as piles, are swollen and inflamed veins in the rectum and anus that can cause pain, itching, bleeding, and discomfort. Grade III and IV haemorrhoids are more severe and often require surgical treatment.",
    "Haemorrhoidectomy is the surgical removal of haemorrhoids, performed using either stapler (stapled hemorrhoidopexy) or routine (conventional excision) techniques. Doctor247 connects you with expert proctologists for safe, effective haemorrhoidectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Haemorrhoidectomy?",
      items: [
        "Grade III haemorrhoids that prolapse with bowel movements and require manual reduction",
        "Grade IV haemorrhoids that are permanently prolapsed and cannot be reduced",
        "Persistent bleeding, pain, and discomfort despite conservative treatment",
        "Strangulated or thrombosed haemorrhoids requiring surgical intervention",
      ],
    },
    {
      label: "Preventing Haemorrhoids",
      items: [
        "Eat a high-fibre diet with fruits, vegetables, and whole grains",
        "Drink plenty of water to keep stools soft",
        "Avoid straining during bowel movements",
        "Stay physically active and avoid prolonged sitting",
      ],
    },
    {
      label: "Complications of Untreated Haemorrhoids",
      items: [
        "Chronic anemia from ongoing blood loss",
        "Strangulated haemorrhoids (blood supply cut off)",
        "Thrombosis — painful blood clot in a haemorrhoid",
        "Fibrosis and recurrent infections if left untreated",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Stapler & Routine Techniques — expert surgical options based on your condition",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Proctologists — every surgeon is credential-checked with extensive experience in haemorrhoid surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Stapler & Routine Haemorrhoidectomy",
      description:
        "We offer both stapled hemorrhoidopexy (for prolapsed piles) and conventional excision techniques, customized to your specific grade and condition for the best outcomes.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Proctologists",
      description:
        "Our proctology specialists have performed thousands of haemorrhoidectomies with consistently high success rates and excellent patient outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Long-Lasting Relief",
      description:
        "Haemorrhoidectomy provides permanent relief from severe piles with very low recurrence rates when performed by experienced surgeons.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Digital rectal examination",
    "Proctoscopy / anoscopy to view internal haemorrhoids",
    "Colonoscopy (if bleeding cause is unclear)",
    "Blood tests to assess fitness for the procedure",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on the technique used",
    "Stapler technique: circular stapler to reposition and remove prolapsed tissue",
    "Routine technique: surgical excision of the haemorrhoidal tissue",
    "Procedure typically completed within 30-45 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day as advised",
    "Eat a high-fibre diet and stay well hydrated",
    "Take prescribed stool softeners to avoid straining",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain or sit on the toilet for long periods",
    "Don't lift heavy weights for at least 3-4 weeks",
    "Don't ignore continued bleeding or fever — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had grade IV piles and the stapler haemorrhoidectomy gave me complete relief. The pain was manageable and recovery was quicker than I expected.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“After years of suffering, I finally got surgery. The team was professional, the procedure was smooth, and the 90-day follow-ups ensured proper healing.”",
      name: "R. Menon",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Excellent care from consultation to recovery. The stapler technique meant less pain and faster return to daily activities.”",
      name: "V. Kumar",
      role: "HSR Layout, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is haemorrhoidectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within a few days to a week.",
    },
    {
      q: "How long does recovery take after haemorrhoidectomy?",
      a: "Most patients return to light activities within 1-2 weeks and full recovery takes 3-4 weeks. The stapler technique generally offers faster recovery compared to conventional excision.",
    },
    {
      q: "Is haemorrhoidectomy covered by insurance?",
      a: "Yes, haemorrhoidectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will haemorrhoids come back after surgery?",
      a: "Haemorrhoidectomy provides permanent removal of the affected tissue with very low recurrence rates. Maintaining a healthy diet and bowel habits further reduces the risk.",
    },
    {
      q: "What is the difference between stapler and routine haemorrhoidectomy?",
      a: "Stapler haemorrhoidectomy (stapled hemorrhoidopexy) uses a circular stapler to reposition prolapsed tissue and is generally less painful with faster recovery. Routine (conventional) haemorrhoidectomy involves surgical excision of the haemorrhoidal tissue and may be preferred for certain types. Your surgeon will recommend the best option based on your condition.",
    },
  ],
  metaTitle: "Haemorrhoidectomy in Bangalore | Stapler & Routine Piles Surgery — Doctor247",
  metaDescription:
    "Best haemorrhoidectomy in Bangalore starting at ₹45,000. Stapler & routine piles surgery for grade III & IV haemorrhoids, cashless insurance, expert proctologists.",
  metaKeywords:
    "haemorrhoidectomy in bangalore, piles surgery cost bangalore, stapler hemorrhoidopexy, hemorrhoidectomy surgery, best proctologist bangalore, piles operation price",
},

"haemorrhoidectomy-fissurectomy": {
  slug: "haemorrhoidectomy-fissurectomy",
  name: "Haemorrhoidectomy + Fissurectomy - (Staples & Tackers Excluded)",
  shortName: "Piles & Fissure Surgery",
  price: "₹60,000",
  heroDescription:
    "Combined haemorrhoidectomy and fissurectomy for patients with both piles and anal fissures using advanced stapler technique with cashless insurance, no-cost EMI, and free follow-ups. Get complete relief from multiple anorectal conditions with expert proctologists in Bangalore.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "2,500+", label: "Combined Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Haemorrhoids and Anal Fissures?",
  aboutParagraphs: [
    "Haemorrhoids (piles) are swollen veins in the rectum and anus, while anal fissures are small tears in the lining of the anus. These conditions often occur together, causing pain, bleeding, and discomfort during bowel movements.",
    "Combined haemorrhoidectomy and fissurectomy addresses both conditions in a single procedure, using stapler techniques for piles and surgical excision for fissures. Doctor247 connects you with expert proctologists for safe, effective combined surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Combined Surgery?",
      items: [
        "Presence of both haemorrhoids (grade III/IV) and chronic anal fissures",
        "Persistent pain, bleeding, and discomfort from both conditions",
        "Failure of conservative treatment for both conditions",
        "Desire for a single procedure to address multiple issues",
      ],
    },
    {
      label: "Preventing Anorectal Conditions",
      items: [
        "Eat a high-fibre diet with fruits, vegetables, and whole grains",
        "Drink plenty of water to keep stools soft",
        "Avoid straining during bowel movements",
        "Stay physically active and maintain healthy bowel habits",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Chronic pain and bleeding affecting quality of life",
        "Anal sphincter spasm from fissure causing worsening pain",
        "Anaemia from chronic blood loss",
        "Increased risk of infection and abscess formation",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Combined Stapler & Excision Technique — addresses both conditions in one procedure",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Proctologists — every surgeon is credential-checked with extensive experience in complex anorectal surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Combined Surgical Approach",
      description:
        "We address both haemorrhoids and fissures in a single procedure, using stapler technique for piles and surgical excision for fissures, reducing the need for multiple surgeries.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Proctologists",
      description:
        "Our proctology specialists have extensive experience in combined procedures with consistently high success rates and excellent patient outcomes.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Complete Anorectal Relief",
      description:
        "Combined surgery provides lasting relief from both conditions simultaneously, allowing patients to return to normal life without ongoing symptoms.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Digital rectal examination",
    "Proctoscopy / anoscopy to view haemorrhoids and fissures",
    "Colonoscopy (if bleeding cause is unclear)",
    "Blood tests to assess fitness for the procedure",
  ],
  procedureSteps: [
    "Spinal or general anaesthesia for a pain-free procedure",
    "Stapler haemorrhoidectomy to reposition and remove prolapsed piles",
    "Fissurectomy to remove chronic fissure tissue and relieve spasm",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day as advised",
    "Eat a high-fibre diet and stay well hydrated",
    "Take prescribed stool softeners and pain medication on schedule",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain or sit on the toilet for long periods",
    "Don't lift heavy weights for at least 3-4 weeks",
    "Don't ignore continued bleeding, fever, or severe pain — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had both piles and fissures and was worried about two separate surgeries. The combined procedure solved everything at once. Recovery was manageable with the team's support.”",
      name: "A. Menon",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The stapler technique for piles and fissurectomy worked perfectly. The 90-day follow-ups ensured I healed completely. Highly recommend Doctor247.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Excellent care from consultation to full recovery. The combined surgery meant less time off work and faster return to daily activities.”",
      name: "P. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is combined haemorrhoidectomy and fissurectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within a week.",
    },
    {
      q: "How long does recovery take after combined surgery?",
      a: "Most patients return to light activities within 1-2 weeks and full recovery takes 3-4 weeks. The stapler technique generally offers faster recovery for the haemorrhoid component.",
    },
    {
      q: "Is combined surgery covered by insurance?",
      a: "Yes, both haemorrhoidectomy and fissurectomy are covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Why combine both surgeries into one?",
      a: "Combined surgery addresses both conditions in a single procedure, reducing the need for multiple surgeries, anaesthesia exposures, and recovery periods. It is cost-effective and time-efficient for patients with both conditions.",
    },
    {
      q: "What is excluded from the cost?",
      a: "The cost of staples and tackers (single-use surgical devices) is excluded from the ₹60,000 price. These may add approximately ₹15,000-₹25,000 to the total cost. Your surgeon will inform you of the exact charges during consultation.",
    },
  ],
  metaTitle: "Combined Piles & Fissure Surgery in Bangalore | Haemorrhoidectomy + Fissurectomy — Doctor247",
  metaDescription:
    "Best combined piles and fissure surgery in Bangalore starting at ₹60,000. Stapler haemorrhoidectomy with fissurectomy, cashless insurance, expert proctologists.",
  metaKeywords:
    "combined piles fissure surgery bangalore, haemorrhoidectomy cost bangalore, fissurectomy, piles and fissure treatment, best proctologist bangalore, anorectal surgery cost",
},

"herniorraphy-inguinal-uni": {
  slug: "herniorraphy-inguinal-uni",
  name: "Herniorraphy - Inguinal (Unilateral)",
  shortName: "Inguinal Hernia",
  price: "₹55,000",
  heroDescription:
    "Safe, effective inguinal hernia repair (herniorraphy) for unilateral hernias with mesh reinforcement, cashless insurance, no-cost EMI, and free follow-ups. Get expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "8,500+", label: "Inguinal Hernia Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Inguinal Hernia?",
  aboutParagraphs: [
    "An inguinal hernia occurs when tissue, such as part of the intestine, protrudes through a weak spot in the abdominal muscles in the groin area. It is the most common type of hernia and appears as a bulge in the groin that may be painful, especially when lifting, coughing, or straining.",
    "Herniorraphy is the surgical repair of a hernia, involving pushing the protruding tissue back into place and reinforcing the weakened muscle wall with mesh. Doctor247 connects you with experienced general surgeons for safe, effective inguinal hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Inguinal Hernia Surgery?",
      items: [
        "A visible bulge in the groin that enlarges with standing or straining",
        "Pain or discomfort in the groin while lifting, coughing, or bending",
        "A bulge that cannot be pushed back in (may need urgent care)",
        "Nausea or vomiting along with the bulge (emergency sign)",
      ],
    },
    {
      label: "Preventing Inguinal Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Inguinal Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Herniorraphy — mesh-reinforced repair for lasting results",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Herniorraphy with Mesh",
      description:
        "We use advanced mesh-reinforced repair techniques to provide lasting results with very low recurrence rates, ensuring complete and durable hernia correction.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing inguinal hernia repairs with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Over 95% Success Rate",
      description:
        "Our mesh-repair technique and post-operative care protocol keep hernia recurrence rates well under the national average.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the groin bulge",
    "Ultrasound of the groin to confirm the hernia",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on your case",
    "Incision made in the groin to access the hernia",
    "Protruding tissue is pushed back into place, and the weak spot is reinforced with mesh",
    "Closure of incisions — procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had an inguinal hernia that was causing pain with every lift. The surgery was smooth, and I'm completely healed now. No recurrence after 2 years.”",
      name: "R. Sharma",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The team explained every step clearly and handled my insurance claim end-to-end. No hidden costs, exactly as quoted. Highly recommend Doctor247.”",
      name: "M. Iqbal",
      role: "HSR Layout, Bangalore",
    },
    {
      quote:
        "“Free follow-ups for 3 months gave me real peace of mind. My surgeon checked on my recovery personally every time.”",
      name: "A. Fernandes",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is inguinal hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Most patients experience mild discomfort for a few days, well managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after inguinal hernia repair?",
      a: "Most patients return to light daily activities within a week and to normal activity, including exercise, within 4-6 weeks. Recovery time depends on the type of surgical technique used.",
    },
    {
      q: "Is inguinal hernia surgery covered by insurance?",
      a: "Yes, inguinal hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can a hernia come back after herniorraphy?",
      a: "Recurrence rates are low (under 5%) when mesh repair is used by an experienced surgeon. Following post-operative guidelines significantly reduces the risk of recurrence.",
    },
    {
      q: "What is the difference between herniorraphy and hernioplasty?",
      a: "Herniorraphy is the surgical repair of a hernia, often involving sutures to close the defect. Inguinal hernia repair typically uses hernioplasty, which involves reinforcing the weak area with mesh for stronger, more durable results. Both terms are often used interchangeably for hernia repair.",
    },
  ],
  metaTitle: "Inguinal Hernia Surgery in Bangalore | Unilateral Herniorraphy — Doctor247",
  metaDescription:
    "Best inguinal hernia repair in Bangalore starting at ₹55,000. Expert unilateral herniorraphy with mesh reinforcement, cashless insurance, no-cost EMI, free follow-ups.",
  metaKeywords:
    "inguinal hernia surgery in bangalore, herniorraphy cost bangalore, unilateral hernia repair, best hernia surgeon bangalore, hernia operation cost, groin hernia treatment",
},

"hernioplasty-inguinal-femoral-uni": {
  slug: "hernioplasty-inguinal-femoral-uni",
  name: "Hernioplasty - Inguinal / Femoral (Unilateral) - Excluding Mesh Cost",
  shortName: "Inguinal/Femoral Hernia",
  price: "₹70,000",
  heroDescription:
    "Advanced hernioplasty for inguinal and femoral hernias using mesh-reinforced repair for lasting results with cashless insurance, no-cost EMI, and free follow-ups. Get expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "7,500+", label: "Hernioplasty Procedures Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Inguinal and Femoral Hernias?",
  aboutParagraphs: [
    "Inguinal hernias occur when tissue protrudes through a weak spot in the abdominal muscles in the groin area, while femoral hernias occur lower down in the upper thigh near the femoral canal. Both types present as bulges that may cause pain and discomfort.",
    "Hernioplasty is a surgical procedure that repairs the hernia and reinforces the weakened area with mesh, providing a stronger, more durable repair than traditional herniorraphy. Doctor247 connects you with experienced surgeons for safe, effective hernioplasty in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Inguinal/Femoral Hernia Surgery?",
      items: [
        "A visible bulge in the groin or upper thigh that enlarges with standing or straining",
        "Pain or discomfort in the groin while lifting, coughing, or bending",
        "A bulge that cannot be pushed back in (may need urgent care)",
        "Nausea or vomiting along with the bulge (emergency sign)",
      ],
    },
    {
      label: "Preventing Inguinal/Femoral Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Inguinal/Femoral Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Hernioplasty — mesh-reinforced repair for stronger, more durable results",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Mesh Hernioplasty",
      description:
        "We use high-quality surgical mesh to reinforce the weakened muscle wall, providing a stronger repair with significantly lower recurrence rates than traditional sutured repair.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing hernioplasty procedures with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Repair for Inguinal & Femoral Hernias",
      description:
        "Our surgeons are skilled in repairing both inguinal and femoral hernias, providing expert care for both types of groin hernias.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the groin bulge",
    "Ultrasound of the groin to confirm the hernia",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on your case",
    "Incision made in the groin to access the hernia",
    "Protruding tissue is pushed back into place, and the weak spot is reinforced with mesh",
    "Closure of incisions — procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had a femoral hernia that was causing discomfort with every step. The mesh hernioplasty gave me complete relief and I'm back to my normal routine. Excellent care.”",
      name: "S. Kumar",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The mesh repair technique provides much stronger support than I expected. The surgeon was experienced and the team handled everything professionally.”",
      name: "R. Menon",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is hernioplasty painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Most patients experience mild to moderate discomfort for a few days, well managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after hernioplasty?",
      a: "Most patients return to light daily activities within a week and to normal activity, including exercise, within 4-6 weeks. The mesh reinforcement provides strong support for long-term recovery.",
    },
    {
      q: "Is hernioplasty covered by insurance?",
      a: "Yes, hernioplasty for inguinal and femoral hernias is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between herniorraphy and hernioplasty?",
      a: "Herniorraphy is the surgical repair of a hernia, often involving sutures to close the defect. Hernioplasty specifically refers to repair using mesh reinforcement, which provides a stronger and more durable repair with lower recurrence rates.",
    },
    {
      q: "What is the difference between inguinal and femoral hernias?",
      a: "Inguinal hernias occur in the groin area and are the most common type. Femoral hernias occur lower down, just below the groin crease in the upper thigh. Femoral hernias are less common but have a higher risk of strangulation and may require more urgent surgery.",
    },
  ],
  metaTitle: "Inguinal & Femoral Hernia Surgery in Bangalore | Mesh Hernioplasty — Doctor247",
  metaDescription:
    "Best inguinal and femoral hernia repair in Bangalore starting at ₹70,000. Advanced mesh hernioplasty, cashless insurance, no-cost EMI, expert surgeons.",
  metaKeywords:
    "inguinal hernia surgery in bangalore, femoral hernia repair, hernioplasty cost bangalore, mesh hernia repair, best hernia surgeon bangalore, hernia operation cost",
},

"hernioplasty-inguinal-femoral-bi": {
  slug: "hernioplasty-inguinal-femoral-bi",
  name: "Hernioplasty - Inguinal / Femoral (Bilateral) - Excluding Mesh Cost",
  shortName: "Bilateral Hernia Repair",
  price: "₹90,000",
  heroDescription:
    "Advanced bilateral hernioplasty for inguinal and femoral hernias on both sides using mesh-reinforced repair for lasting results with cashless insurance, no-cost EMI, and free follow-ups. Get expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "4,500+", label: "Bilateral Hernioplasties Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Bilateral Inguinal and Femoral Hernias?",
  aboutParagraphs: [
    "Bilateral hernias occur when there are hernias on both sides of the groin - either both inguinal, both femoral, or one of each. This condition requires surgical repair on both sides to prevent complications and restore normal function.",
    "Bilateral hernioplasty is a surgical procedure that repairs hernias on both sides simultaneously using mesh reinforcement, providing stronger, more durable results. Doctor247 connects you with experienced surgeons for safe, effective bilateral hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Bilateral Hernia Surgery?",
      items: [
        "Visible bulges on both sides of the groin or upper thighs",
        "Pain or discomfort on both sides while lifting, coughing, or bending",
        "Bulges that cannot be pushed back in (may need urgent care)",
        "Bilateral hernias diagnosed through physical examination or imaging",
      ],
    },
    {
      label: "Preventing Bilateral Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Bilateral Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen on either side",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Bilateral Hernioplasty — both sides repaired in a single procedure",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in complex hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Single Procedure for Both Sides",
      description:
        "We repair both inguinal/femoral hernias in a single procedure, saving you the time, cost, and recovery of two separate surgeries. One anaesthesia, one hospital stay.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Advanced Mesh Hernioplasty",
      description:
        "We use high-quality surgical mesh to reinforce weakened muscle walls on both sides, providing stronger repair with significantly lower recurrence rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Experienced Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing complex bilateral hernia procedures with consistently high success rates.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of both groin areas",
    "Ultrasound of both groins to confirm bilateral hernias",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General or spinal anaesthesia for the procedure",
    "Incision made on both sides of the groin to access both hernias",
    "Protruding tissue is pushed back into place on both sides",
    "Both weakened areas are reinforced with mesh and incisions closed",
    "Procedure typically completed within 90-120 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling on either side — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had hernias on both sides and was dreading two surgeries. Doctor247 repaired both in one procedure, saving me time and recovery. Excellent care.”",
      name: "V. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“Bilateral hernioplasty was the best decision. One surgery, one recovery period. The mesh repair is solid and I'm completely healed now.”",
      name: "R. Menon",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The team handled my insurance claim seamlessly. Transparent pricing, excellent surgical care, and thorough follow-ups. Highly recommend Doctor247.”",
      name: "S. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is bilateral hernia surgery more painful than unilateral?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort may be more than unilateral surgery since two areas are repaired, but it is well managed with prescribed medication.",
    },
    {
      q: "How long does recovery take after bilateral hernioplasty?",
      a: "Most patients return to light daily activities within 1-2 weeks and to normal activity, including exercise, within 4-6 weeks. Recovery may be slightly longer than unilateral repair due to healing on both sides.",
    },
    {
      q: "Is bilateral hernia surgery covered by insurance?",
      a: "Yes, bilateral hernioplasty is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the advantage of bilateral repair over two separate surgeries?",
      a: "Bilateral repair offers several advantages: one anaesthesia, one hospital stay, one recovery period, lower overall cost, and less time away from work compared to two separate surgeries.",
    },
    {
      q: "What mesh is used for bilateral hernioplasty?",
      a: "We use high-quality surgical mesh that is safe, biocompatible, and designed for long-term durability. The mesh is placed on both sides to reinforce the weakened muscle walls and reduce recurrence risk. Mesh cost is additional at approximately ₹7,000 per side.",
    },
  ],
  metaTitle: "Bilateral Inguinal & Femoral Hernia Surgery in Bangalore | Mesh Hernioplasty — Doctor247",
  metaDescription:
    "Best bilateral hernia repair in Bangalore starting at ₹90,000. Advanced mesh hernioplasty for both sides, one procedure, cashless insurance, expert surgeons.",
  metaKeywords:
    "bilateral hernia surgery in bangalore, bilateral inguinal hernia repair, hernioplasty cost bangalore, double hernia surgery, best hernia surgeon bangalore, bilateral hernia operation cost",
},

"hernioplasty-umbilical-paraumbilical": {
  slug: "hernioplasty-umbilical-paraumbilical",
  name: "Hernioplasty - Umbilical / Paraumbilical - Excluding Mesh Cost",
  shortName: "Umbilical Hernia",
  price: "₹80,000",
  heroDescription:
    "Advanced mesh hernioplasty for umbilical and paraumbilical hernias with lasting results, cashless insurance, no-cost EMI, and free follow-ups. Get expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Umbilical Hernia Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Umbilical and Paraumbilical Hernias?",
  aboutParagraphs: [
    "An umbilical hernia occurs when tissue protrudes through a weak spot in the abdominal wall near the belly button (navel). Paraumbilical hernias occur adjacent to the umbilicus. Both types appear as bulges around the navel area that may cause pain and discomfort.",
    "Hernioplasty is a surgical procedure that repairs the hernia and reinforces the weakened area with mesh, providing a stronger, more durable repair. Doctor247 connects you with experienced surgeons for safe, effective umbilical and paraumbilical hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Umbilical/Paraumbilical Hernia Surgery?",
      items: [
        "A visible bulge near or around the belly button that enlarges with standing or straining",
        "Pain or discomfort in the navel area while lifting, coughing, or bending",
        "A bulge that cannot be pushed back in (may need urgent care)",
        "Nausea or vomiting along with the bulge (emergency sign)",
      ],
    },
    {
      label: "Preventing Umbilical/Paraumbilical Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Umbilical/Paraumbilical Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Mesh Hernioplasty — mesh-reinforced repair for stronger, more durable results",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Mesh Hernioplasty",
      description:
        "We use high-quality surgical mesh to reinforce the weakened abdominal wall near the navel, providing a stronger repair with significantly lower recurrence rates than traditional sutured repair.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced General Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing umbilical and paraumbilical hernia repairs with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Repair for Both Hernia Types",
      description:
        "Our surgeons are skilled in repairing both umbilical hernias (at the navel) and paraumbilical hernias (adjacent to the navel), providing expert care for both conditions.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the navel bulge",
    "Ultrasound of the abdominal wall to confirm the hernia",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on your case",
    "Incision made near the navel to access the hernia",
    "Protruding tissue is pushed back into place, and the weak spot is reinforced with mesh",
    "Closure of incisions — procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling around the navel — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had an umbilical hernia that was causing pain and discomfort. The mesh hernioplasty gave me complete relief and the scar is barely visible. Excellent care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The paraumbilical hernia was affecting my daily activities. The surgery was smooth and the mesh repair is solid. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great team and great care.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is umbilical hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Most patients experience mild to moderate discomfort for a few days, well managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after umbilical hernioplasty?",
      a: "Most patients return to light daily activities within a week and to normal activity, including exercise, within 4-6 weeks. The mesh reinforcement provides strong support for long-term recovery.",
    },
    {
      q: "Is umbilical hernia surgery covered by insurance?",
      a: "Yes, umbilical and paraumbilical hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between umbilical and paraumbilical hernias?",
      a: "Umbilical hernias occur directly at the belly button through the natural weakness of the umbilical ring. Paraumbilical hernias occur adjacent to the navel, through the abdominal wall near the umbilicus. Both are treated similarly with mesh hernioplasty.",
    },
    {
      q: "What mesh is used for umbilical hernioplasty?",
      a: "We use high-quality surgical mesh that is safe, biocompatible, and designed for long-term durability. The mesh reinforces the weakened abdominal wall and reduces recurrence risk. Mesh cost is additional at approximately ₹7,000.",
    },
  ],
  metaTitle: "Umbilical & Paraumbilical Hernia Surgery in Bangalore | Mesh Hernioplasty — Doctor247",
  metaDescription:
    "Best umbilical and paraumbilical hernia repair in Bangalore starting at ₹80,000. Advanced mesh hernioplasty, cashless insurance, no-cost EMI, expert surgeons.",
  metaKeywords:
    "umbilical hernia surgery in bangalore, paraumbilical hernia repair, hernioplasty cost bangalore, mesh hernia repair, best hernia surgeon bangalore, navel hernia operation cost",
},

"hernioplasty-incisional-ventral": {
  slug: "hernioplasty-incisional-ventral",
  name: "Hernioplasty - Incisional / Ventral - Excluding Mesh Cost",
  shortName: "Incisional/Ventral Hernia",
  price: "₹80,000",
  heroDescription:
    "Advanced mesh hernioplasty for incisional and ventral hernias with lasting results, cashless insurance, no-cost EMI, and free follow-ups. Get expert hernia treatment by verified surgeons in Bangalore with a high success rate and affordable pricing.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,000+", label: "Incisional/Ventral Hernia Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Incisional and Ventral Hernias?",
  aboutParagraphs: [
    "Incisional hernias occur when tissue protrudes through a weak spot in the abdominal wall at the site of a previous surgical incision. Ventral hernias are similar but can occur anywhere in the abdominal wall, not necessarily at a previous surgical site.",
    "Hernioplasty is a surgical procedure that repairs the hernia and reinforces the weakened area with mesh, providing a stronger, more durable repair. These hernias can be more complex due to previous surgery and require experienced surgical expertise. Doctor247 connects you with experienced surgeons for safe, effective incisional and ventral hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Incisional/Ventral Hernia Surgery?",
      items: [
        "A visible bulge at or near a previous surgical scar or in the abdominal wall",
        "Pain or discomfort in the abdominal area while lifting, coughing, or bending",
        "A bulge that cannot be pushed back in (may need urgent care)",
        "Nausea or vomiting along with the bulge (emergency sign)",
      ],
    },
    {
      label: "Preventing Incisional/Ventral Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques after surgery",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Incisional/Ventral Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Mesh Hernioplasty — mesh-reinforced repair for complex incisional and ventral hernias",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in complex hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Mesh Hernioplasty",
      description:
        "We use high-quality surgical mesh to reinforce the weakened abdominal wall, providing a stronger repair with significantly lower recurrence rates than traditional sutured repair.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Expert in Complex Hernia Repair",
      description:
        "Our surgeons are specially experienced in managing complex incisional and ventral hernias, including those from previous surgeries and recurrent cases.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Repair for Both Hernia Types",
      description:
        "Our surgeons are skilled in repairing both incisional hernias (at previous surgical sites) and ventral hernias (anywhere in the abdominal wall), providing expert care for both conditions.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the abdominal bulge",
    "Ultrasound or CT scan to confirm the hernia and assess size",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for the procedure",
    "Incision made over the hernia site or along the previous scar",
    "Protruding tissue is pushed back into place, and the weak spot is reinforced with mesh",
    "Closure of incisions — procedure typically completed within 60-90 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I developed an incisional hernia after my previous surgery. The team at Doctor247 repaired it expertly with mesh reinforcement. Recovery was smooth and I'm completely healed.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My ventral hernia was causing significant discomfort. The mesh hernioplasty gave me lasting relief. The surgeon was experienced and the care was excellent.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is incisional/ventral hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Most patients experience mild to moderate discomfort for a few days, well managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after incisional/ventral hernioplasty?",
      a: "Most patients return to light daily activities within 1-2 weeks and to normal activity, including exercise, within 4-6 weeks. Recovery may be slightly longer due to the complexity of these hernias.",
    },
    {
      q: "Is incisional/ventral hernia surgery covered by insurance?",
      a: "Yes, incisional and ventral hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between incisional and ventral hernias?",
      a: "Incisional hernias occur specifically at the site of a previous surgical incision, through the scar tissue. Ventral hernias can occur anywhere in the abdominal wall and may not be related to previous surgery. Both are treated similarly with mesh hernioplasty.",
    },
    {
      q: "What mesh is used for incisional/ventral hernioplasty?",
      a: "We use high-quality surgical mesh that is safe, biocompatible, and designed for long-term durability, often using larger mesh for these complex hernias. The mesh reinforces the weakened abdominal wall and reduces recurrence risk. Mesh cost is additional at approximately ₹7,000.",
    },
  ],
  metaTitle: "Incisional & Ventral Hernia Surgery in Bangalore | Mesh Hernioplasty — Doctor247",
  metaDescription:
    "Best incisional and ventral hernia repair in Bangalore starting at ₹80,000. Advanced mesh hernioplasty, cashless insurance, no-cost EMI, expert surgeons.",
  metaKeywords:
    "incisional hernia surgery in bangalore, ventral hernia repair, hernioplasty cost bangalore, mesh hernia repair, complex hernia surgery, abdominal hernia operation cost",
},
"laparoscopic-hernioplasty-inguinal-uni": {
  slug: "laparoscopic-hernioplasty-inguinal-uni",
  name: "Laparoscopic Hernioplasty - Inguinal (Unilateral) - Excluding Mesh & Tackers",
  shortName: "Laparoscopic Inguinal Hernia",
  price: "₹60,000",
  heroDescription:
    "Advanced laparoscopic inguinal hernia repair (TEP/TAPP) with tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get expert laparoscopic hernia treatment by verified surgeons in Bangalore with a high success rate.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "5,500+", label: "Laparoscopic Hernia Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Inguinal Hernia?",
  aboutParagraphs: [
    "An inguinal hernia occurs when tissue, such as part of the intestine, protrudes through a weak spot in the abdominal muscles in the groin area. It is the most common type of hernia and appears as a bulge in the groin that may be painful, especially when lifting, coughing, or straining.",
    "Laparoscopic hernioplasty is a minimally invasive surgical procedure that repairs the hernia using small incisions, a camera, and specialized instruments. The weakened area is reinforced with mesh for a stronger, more durable repair. Doctor247 connects you with experienced laparoscopic surgeons for safe, effective inguinal hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Inguinal Hernia Surgery?",
      items: [
        "A visible bulge in the groin that enlarges with standing or straining",
        "Pain or discomfort in the groin while lifting, coughing, or bending",
        "Recurrent hernia after previous open repair",
        "Bilateral hernias (can be repaired in the same procedure)",
      ],
    },
    {
      label: "Preventing Inguinal Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Inguinal Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — TEP/TAPP approaches with tiny incisions, less pain, faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in laparoscopic hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Hernioplasty",
      description:
        "We use minimally invasive keyhole surgery with 3 tiny incisions to repair the hernia, resulting in less post-operative pain, shorter hospital stay, faster recovery, and minimal scarring.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Expert Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing laparoscopic hernia repairs with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Return to Work",
      description:
        "Most patients return to light daily activities within 3-5 days and to normal activity within 2-3 weeks — significantly faster than open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the groin bulge",
    "Ultrasound of the groin to confirm the hernia",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3 small keyhole incisions in the lower abdomen",
    "Laparoscopic repair using TEP (Totally Extraperitoneal) or TAPP (Transabdominal Preperitoneal) approach",
    "Mesh placement to reinforce the weakened area",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation",
    "Take prescribed pain relief and antibiotics on schedule",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 2-3 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I chose laparoscopic hernia repair and I'm so glad I did. Tiny scars, minimal pain, and I was back to work in 5 days. Excellent care from Doctor247.”",
      name: "R. Sharma",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant faster recovery than I expected. The surgeon was highly skilled and the team handled everything professionally.”",
      name: "M. Iqbal",
      role: "HSR Layout, Bangalore",
    },
    {
      quote:
        "“Free follow-ups for 3 months gave me real peace of mind. My surgeon checked on my recovery personally every time. Highly recommend.”",
      name: "A. Fernandes",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic hernia repair causes significantly less post-operative pain than open surgery due to smaller incisions, with most patients experiencing only mild discomfort.",
    },
    {
      q: "How long does recovery take after laparoscopic hernioplasty?",
      a: "Most patients return to light daily activities within 3-5 days and to normal activity, including exercise, within 2-3 weeks — significantly faster than the 4-6 weeks required for open surgery.",
    },
    {
      q: "Is laparoscopic hernia surgery covered by insurance?",
      a: "Yes, laparoscopic inguinal hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What are the advantages of laparoscopic over open hernia repair?",
      a: "Laparoscopic repair offers several advantages: smaller incisions, less post-operative pain, faster recovery, earlier return to work, minimal scarring, and the ability to repair both sides in the same procedure.",
    },
    {
      q: "What is excluded from the cost?",
      a: "The cost of mesh and tackers (single-use surgical devices) is excluded from the ₹60,000 price. These may add approximately ₹10,000-₹15,000 to the total cost. Your surgeon will inform you of the exact charges during consultation.",
    },
  ],
  metaTitle: "Laparoscopic Inguinal Hernia Surgery in Bangalore | TEP/TAPP Hernioplasty — Doctor247",
  metaDescription:
    "Best laparoscopic inguinal hernia repair in Bangalore starting at ₹60,000. Advanced TEP/TAPP hernioplasty, tiny incisions, faster recovery, cashless insurance.",
  metaKeywords:
    "laparoscopic hernia surgery in bangalore, inguinal hernia repair cost, TEP hernia repair, TAPP hernia repair, best laparoscopic surgeon bangalore, hernia operation cost",
},


"laparoscopic-hernioplasty-inguinal-bi": {
  slug: "laparoscopic-hernioplasty-inguinal-bi",
  name: "Laparoscopic Hernioplasty - Inguinal (Bilateral) - Excluding Mesh & Tackers",
  shortName: "Laparoscopic Bilateral Hernia",
  price: "₹57,500",
  heroDescription:
    "Advanced laparoscopic bilateral inguinal hernia repair (TEP/TAPP) with tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get expert laparoscopic hernia treatment by verified surgeons in Bangalore with a high success rate.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "4,000+", label: "Laparoscopic Bilateral Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Bilateral Inguinal Hernias?",
  aboutParagraphs: [
    "Bilateral inguinal hernias occur when there are hernias on both sides of the groin. This condition requires surgical repair on both sides to prevent complications and restore normal function.",
    "Laparoscopic hernioplasty is a minimally invasive surgical procedure that repairs both hernias simultaneously using small incisions, a camera, and specialized instruments. The weakened areas are reinforced with mesh for stronger, more durable results. Doctor247 connects you with experienced laparoscopic surgeons for safe, effective bilateral inguinal hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Bilateral Hernia Surgery?",
      items: [
        "Visible bulges on both sides of the groin that enlarge with standing or straining",
        "Pain or discomfort on both sides while lifting, coughing, or bending",
        "Bilateral hernias diagnosed through physical examination or imaging",
        "Recurrent hernias after previous open repairs",
      ],
    },
    {
      label: "Preventing Inguinal Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Bilateral Inguinal Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen on either side",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — TEP/TAPP approaches, both sides repaired in one procedure",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in laparoscopic hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Single Procedure for Both Sides",
      description:
        "We repair both inguinal hernias in a single laparoscopic procedure, saving you the time, cost, and recovery of two separate surgeries. One anaesthesia, one hospital stay.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Advanced Laparoscopic Technique",
      description:
        "We use minimally invasive keyhole surgery with 3 tiny incisions to repair both hernias, resulting in less pain, faster recovery, and minimal scarring.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Return to Work",
      description:
        "Most patients return to light daily activities within 3-5 days and to normal activity within 2-3 weeks — significantly faster than open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of both groin areas",
    "Ultrasound of both groins to confirm bilateral hernias",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3 small keyhole incisions in the lower abdomen",
    "Laparoscopic repair using TEP (Totally Extraperitoneal) or TAPP (Transabdominal Preperitoneal) approach on both sides",
    "Mesh placement to reinforce both weakened areas",
    "Procedure typically completed within 60-90 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation",
    "Take prescribed pain relief and antibiotics on schedule",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 2-3 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling on either side — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had hernias on both sides and was dreading two surgeries. Laparoscopic repair fixed both in one procedure. Recovery was faster than I expected. Highly recommend Doctor247.”",
      name: "V. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and faster recovery. One surgery, one recovery period. Excellent care from the team.”",
      name: "R. Menon",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great experience.”",
      name: "S. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic bilateral hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic repair causes significantly less post-operative pain than open surgery, with most patients experiencing only mild discomfort on both sides.",
    },
    {
      q: "How long does recovery take after laparoscopic bilateral hernioplasty?",
      a: "Most patients return to light daily activities within 3-5 days and to normal activity, including exercise, within 2-3 weeks — significantly faster than open surgery.",
    },
    {
      q: "Is laparoscopic bilateral hernia surgery covered by insurance?",
      a: "Yes, bilateral inguinal hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the advantage of laparoscopic over open for bilateral hernias?",
      a: "Laparoscopic repair offers several advantages for bilateral hernias: both sides repaired in one procedure, smaller incisions, less post-operative pain, faster recovery, earlier return to work, and minimal scarring.",
    },
    {
      q: "What is excluded from the cost?",
      a: "The cost of mesh and tackers (single-use surgical devices) is excluded from the ₹57,500 price. These may add approximately ₹15,000-₹20,000 for bilateral repair. Your surgeon will inform you of the exact charges during consultation.",
    },
  ],
  metaTitle: "Laparoscopic Bilateral Inguinal Hernia Surgery in Bangalore | TEP/TAPP — Doctor247",
  metaDescription:
    "Best laparoscopic bilateral inguinal hernia repair in Bangalore starting at ₹57,500. Advanced TEP/TAPP hernioplasty for both sides, faster recovery, cashless insurance.",
  metaKeywords:
    "laparoscopic bilateral hernia surgery in bangalore, bilateral inguinal hernia repair cost, TEP hernia repair, TAPP hernia repair, best laparoscopic surgeon bangalore, double hernia operation cost",
},

"laparoscopic-hernioplasty-umbilical-paraumbilical": {
  slug: "laparoscopic-hernioplasty-umbilical-paraumbilical",
  name: "Laparoscopic Hernioplasty - Umbilical / Paraumbilical - Excluding Mesh & Tackers",
  shortName: "Laparoscopic Umbilical Hernia",
  price: "₹45,000",
  heroDescription:
    "Advanced laparoscopic umbilical and paraumbilical hernia repair with tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get expert laparoscopic hernia treatment by verified surgeons in Bangalore with a high success rate.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,000+", label: "Laparoscopic Umbilical Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Umbilical and Paraumbilical Hernias?",
  aboutParagraphs: [
    "An umbilical hernia occurs when tissue protrudes through a weak spot in the abdominal wall near the belly button (navel). Paraumbilical hernias occur adjacent to the umbilicus. Both types appear as bulges around the navel area that may cause pain and discomfort.",
    "Laparoscopic hernioplasty is a minimally invasive surgical procedure that repairs the hernia using small incisions, a camera, and specialized instruments. The weakened area is reinforced with mesh for a stronger, more durable repair. Doctor247 connects you with experienced laparoscopic surgeons for safe, effective umbilical and paraumbilical hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Umbilical/Paraumbilical Hernia Surgery?",
      items: [
        "A visible bulge near or around the belly button that enlarges with standing or straining",
        "Pain or discomfort in the navel area while lifting, coughing, or bending",
        "Recurrent hernia after previous open repair",
        "A bulge that cannot be pushed back in (may need urgent care)",
      ],
    },
    {
      label: "Preventing Umbilical/Paraumbilical Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Umbilical/Paraumbilical Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — tiny incisions, less pain, faster recovery, minimal scarring",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in laparoscopic hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Hernioplasty",
      description:
        "We use minimally invasive keyhole surgery with 3 tiny incisions to repair the hernia, resulting in less post-operative pain, shorter hospital stay, faster recovery, and minimal scarring.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Expert Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing laparoscopic hernia repairs with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Return to Work",
      description:
        "Most patients return to light daily activities within 3-5 days and to normal activity within 2-3 weeks — significantly faster than open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the navel bulge",
    "Ultrasound of the abdominal wall to confirm the hernia",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3 small keyhole incisions in the abdomen",
    "Laparoscopic repair of the umbilical/paraumbilical hernia",
    "Mesh placement to reinforce the weakened area",
    "Procedure typically completed within 40-60 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation",
    "Take prescribed pain relief and antibiotics on schedule",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 2-3 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling around the navel — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had an umbilical hernia that was causing discomfort. The laparoscopic repair was quick, recovery was smooth, and the scars are barely visible. Excellent care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and faster recovery than I expected. The surgeon was highly skilled and the team was very supportive.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic umbilical hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic repair causes significantly less post-operative pain than open surgery due to smaller incisions, with most patients experiencing only mild discomfort.",
    },
    {
      q: "How long does recovery take after laparoscopic umbilical hernioplasty?",
      a: "Most patients return to light daily activities within 3-5 days and to normal activity, including exercise, within 2-3 weeks — significantly faster than the 4-6 weeks required for open surgery.",
    },
    {
      q: "Is laparoscopic umbilical hernia surgery covered by insurance?",
      a: "Yes, laparoscopic umbilical and paraumbilical hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between laparoscopic and open umbilical hernia repair?",
      a: "Laparoscopic repair uses 3 tiny incisions and offers less pain, faster recovery, and minimal scarring. Open repair uses a single larger incision directly over the hernia and may be preferred for very small hernias.",
    },
    {
      q: "What is excluded from the cost?",
      a: "The cost of mesh and tackers (single-use surgical devices) is excluded from the ₹45,000 price. These may add approximately ₹10,000-₹15,000 to the total cost. Your surgeon will inform you of the exact charges during consultation.",
    },
  ],
  metaTitle: "Laparoscopic Umbilical & Paraumbilical Hernia Surgery in Bangalore — Doctor247",
  metaDescription:
    "Best laparoscopic umbilical and paraumbilical hernia repair in Bangalore starting at ₹45,000. Advanced laparoscopic hernioplasty, faster recovery, cashless insurance.",
  metaKeywords:
    "laparoscopic umbilical hernia surgery in bangalore, paraumbilical hernia repair cost, laparoscopic hernioplasty, best laparoscopic surgeon bangalore, navel hernia operation cost",
},

"laparoscopic-hernioplasty-incisional-ventral": {
  slug: "laparoscopic-hernioplasty-incisional-ventral",
  name: "Laparoscopic Hernioplasty - Incisional / Ventral - Excluding Mesh & Tackers",
  shortName: "Laparoscopic Incisional/Ventral Hernia",
  price: "₹62,500",
  heroDescription:
    "Advanced laparoscopic incisional and ventral hernia repair with tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get expert laparoscopic hernia treatment by verified surgeons in Bangalore with a high success rate.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "2,500+", label: "Laparoscopic Incisional/Ventral Repairs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Incisional and Ventral Hernias?",
  aboutParagraphs: [
    "Incisional hernias occur when tissue protrudes through a weak spot in the abdominal wall at the site of a previous surgical incision. Ventral hernias are similar but can occur anywhere in the abdominal wall, not necessarily at a previous surgical site. These hernias can be more complex due to previous surgery and require experienced surgical expertise.",
    "Laparoscopic hernioplasty is a minimally invasive surgical procedure that repairs the hernia using small incisions, a camera, and specialized instruments. The weakened area is reinforced with mesh for a stronger, more durable repair. Doctor247 connects you with experienced laparoscopic surgeons for safe, effective incisional and ventral hernia repair in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Incisional/Ventral Hernia Surgery?",
      items: [
        "A visible bulge at or near a previous surgical scar or in the abdominal wall",
        "Pain or discomfort in the abdominal area while lifting, coughing, or bending",
        "Recurrent hernia after previous open repair",
        "A bulge that cannot be pushed back in (may need urgent care)",
      ],
    },
    {
      label: "Preventing Incisional/Ventral Hernias",
      items: [
        "Avoid heavy lifting or use proper lifting techniques after surgery",
        "Maintain a healthy body weight",
        "Treat chronic cough and constipation early",
        "Strengthen core and abdominal muscles regularly",
      ],
    },
    {
      label: "Complications of Incisional/Ventral Hernias",
      items: [
        "Incarceration — hernia gets stuck outside the abdomen",
        "Strangulation — blood supply to tissue is cut off (emergency)",
        "Increasing pain and swelling if left untreated",
        "Higher surgical risk the longer surgery is delayed",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — complex hernia repair with tiny incisions, less pain, faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in complex laparoscopic hernia repair",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Hernioplasty for Complex Hernias",
      description:
        "We use minimally invasive keyhole surgery with 3-4 tiny incisions to repair complex incisional and ventral hernias, resulting in less post-operative pain, shorter hospital stay, faster recovery, and minimal scarring.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Expert in Complex Hernia Repair",
      description:
        "Our surgeons are specially experienced in managing complex incisional and ventral hernias laparoscopically, including those from previous surgeries and recurrent cases.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Return to Work",
      description:
        "Most patients return to light daily activities within 5-7 days and to normal activity within 3-4 weeks — significantly faster than open surgery for these complex hernias.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the abdominal bulge",
    "Ultrasound or CT scan to confirm the hernia and assess size",
    "CT scan (for complex or recurrent hernias)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions in the abdomen",
    "Laparoscopic repair of the incisional/ventral hernia",
    "Mesh placement to reinforce the weakened area",
    "Procedure typically completed within 60-90 minutes",
  ],
  postOpDo: [
    "Walk short distances from day 1 to aid circulation",
    "Take prescribed pain relief and antibiotics on schedule",
    "Eat light, fibre-rich meals to avoid constipation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than 5 kg for 3-4 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't skip your prescribed medication schedule",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had a complex incisional hernia from a previous surgery. The laparoscopic repair was expertly done and recovery was much faster than I expected. Highly recommend Doctor247.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My ventral hernia was causing significant discomfort. The laparoscopic approach meant less pain and faster recovery. Excellent care from the team.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great experience.”",
      name: "P. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic incisional/ventral hernia surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic repair causes significantly less post-operative pain than open surgery due to smaller incisions, with most patients experiencing only mild to moderate discomfort.",
    },
    {
      q: "How long does recovery take after laparoscopic incisional/ventral hernioplasty?",
      a: "Most patients return to light daily activities within 5-7 days and to normal activity, including exercise, within 3-4 weeks — significantly faster than the 4-6 weeks required for open surgery.",
    },
    {
      q: "Is laparoscopic incisional/ventral hernia surgery covered by insurance?",
      a: "Yes, laparoscopic incisional and ventral hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the advantage of laparoscopic over open for incisional/ventral hernias?",
      a: "Laparoscopic repair offers several advantages: smaller incisions, less post-operative pain, faster recovery, earlier return to work, minimal scarring, and lower recurrence rates for complex hernias.",
    },
    {
      q: "What is excluded from the cost?",
      a: "The cost of mesh and tackers (single-use surgical devices) is excluded from the ₹62,500 price. These may add approximately ₹15,000-₹25,000 to the total cost, depending on the size of the hernia. Your surgeon will inform you of the exact charges during consultation.",
    },
  ],
  metaTitle: "Laparoscopic Incisional & Ventral Hernia Surgery in Bangalore — Doctor247",
  metaDescription:
    "Best laparoscopic incisional and ventral hernia repair in Bangalore starting at ₹62,500. Advanced laparoscopic hernioplasty, complex hernia expertise, cashless insurance.",
  metaKeywords:
    "laparoscopic incisional hernia surgery in bangalore, ventral hernia repair cost, laparoscopic hernioplasty, complex hernia surgery, best laparoscopic surgeon bangalore, abdominal hernia operation cost",
},

"lymph-node-biopsy": {
  slug: "lymph-node-biopsy",
  name: "Lymph Node Biopsy (Cervical / Axillary / Inguinal) - Under GA",
  shortName: "Lymph Node Biopsy",
  price: "₹33,500",
  heroDescription:
    "Safe, accurate lymph node biopsy for cervical, axillary, and inguinal nodes under general anaesthesia with expert pathological analysis, cashless insurance, and free follow-ups. Get reliable diagnostic evaluation by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,000+", label: "Lymph Node Biopsies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Lymph Node Biopsy?",
  aboutParagraphs: [
    "A lymph node biopsy is a diagnostic procedure in which a lymph node is removed and examined under a microscope to check for diseases such as infections, autoimmune disorders, or cancer. Lymph nodes are small, bean-shaped glands that are part of the immune system and can be found in the neck (cervical), armpit (axillary), and groin (inguinal) areas.",
    "Under general anaesthesia, the surgeon removes part or all of the lymph node (excisional biopsy) for comprehensive pathological evaluation. This provides the most accurate diagnosis and helps guide treatment decisions. Doctor247 connects you with experienced surgeons for safe, accurate lymph node biopsy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Lymph Node Biopsy?",
      items: [
        "Persistent, unexplained lymph node swelling lasting more than 2-4 weeks",
        "Lymph nodes that are hard, fixed, or growing rapidly",
        "Unexplained fever, night sweats, or weight loss with lymph node enlargement",
        "Suspicious findings on ultrasound, CT, or PET scan",
      ],
    },
    {
      label: "Common Lymph Node Locations",
      items: [
        "Cervical — lymph nodes in the neck region",
        "Axillary — lymph nodes in the armpit area",
        "Inguinal — lymph nodes in the groin region",
      ],
    },
    {
      label: "Complications of Delayed Diagnosis",
      items: [
        "Delayed treatment of underlying infection or malignancy",
        "Progression of disease with potential spread to other organs",
        "Missed opportunity for early-stage cancer diagnosis",
        "Increased morbidity and mortality with delayed treatment",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Surgical Biopsy — precise removal with minimal discomfort and excellent cosmetic results",
        "Free Follow-ups — post-biopsy consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in surgical biopsy procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Accurate & Comprehensive Biopsy",
      description:
        "We perform excisional biopsy to obtain sufficient tissue for complete pathological analysis, ensuring the most accurate diagnosis with special staining and molecular testing available.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing lymph node biopsies with consistently high diagnostic accuracy and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimally Invasive with Good Cosmetic Results",
      description:
        "Our surgeons use carefully placed incisions that follow natural skin folds, resulting in well-healed, cosmetically acceptable scars with minimal tissue trauma.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your biopsy to ensure proper wound healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the affected lymph node area",
    "Ultrasound of the lymph node to assess size and characteristics",
    "CT scan or PET scan for staging if malignancy is suspected",
    "Blood tests including complete blood count (CBC) and inflammatory markers",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "A small incision is made over the affected lymph node area",
    "Part or all of the lymph node (excisional biopsy) is carefully removed",
    "The incision is closed with dissolvable sutures or skin glue",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Keep the biopsy site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs as advised to reduce swelling",
    "Attend your follow-up visit within 7-10 days for wound check and histopathology results",
  ],
  postOpDont: [
    "Don't lift heavy weights for 1-2 weeks",
    "Don't soak the wound in water until fully healed",
    "Don't skip your histopathology review appointment",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had an enlarged lymph node in my neck that needed biopsy. The procedure was quick, painless under anaesthesia, and the results came back on time. Excellent care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The team explained everything clearly and handled my insurance claim seamlessly. The scar is minimal and healing was smooth. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I was anxious about the biopsy but the surgeon and team made me feel comfortable. The 90-day follow-ups gave me peace of mind.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is lymph node biopsy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during the biopsy. Post-operative discomfort is minimal and easily managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after lymph node biopsy?",
      a: "Most patients return to normal activities within 3-5 days. Complete healing of the biopsy site takes about 1-2 weeks. You can resume light work within a few days.",
    },
    {
      q: "Is lymph node biopsy covered by insurance?",
      a: "Yes, lymph node biopsy is covered by most health insurance plans in India for diagnostic purposes. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "How long does it take to get biopsy results?",
      a: "Histopathology results typically take 5-10 working days. In some cases, special staining or molecular testing may take additional time. Your surgeon will inform you of the expected timeline.",
    },
    {
      q: "What is the difference between cervical, axillary, and inguinal lymph node biopsy?",
      a: "Cervical biopsy involves lymph nodes in the neck, axillary biopsy involves nodes in the armpit, and inguinal biopsy involves nodes in the groin. The procedure is similar in all locations, with the incision placed appropriately based on the node's location.",
    },
  ],
  metaTitle: "Lymph Node Biopsy in Bangalore | Cervical / Axillary / Inguinal — Doctor247",
  metaDescription:
    "Best lymph node biopsy in Bangalore starting at ₹33,500. Cervical, axillary, and inguinal biopsy under general anaesthesia, cashless insurance, expert pathological analysis.",
  metaKeywords:
    "lymph node biopsy in bangalore, cervical lymph node biopsy, axillary lymph node biopsy, inguinal lymph node biopsy, biopsy cost bangalore, surgical biopsy",
},

"lipoma-excision": {
  slug: "lipoma-excision",
  name: "Lipoma Excision - Under GA",
  shortName: "Lipoma Removal",
  price: "₹45,000",
  heroDescription:
    "Safe, precise lipoma removal surgery under general anaesthesia with expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get effective treatment for lipomas by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "4,500+", label: "Lipoma Excisions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Lipoma?",
  aboutParagraphs: [
    "A lipoma is a benign (non-cancerous) tumor made of fatty tissue that grows slowly under the skin. They are usually soft, mobile, painless lumps that can occur anywhere on the body, most commonly on the trunk, shoulders, neck, and arms. While lipomas are generally harmless, they can cause discomfort, cosmetic concerns, or interfere with movement depending on their size and location.",
    "Surgical excision (removal) of a lipoma is the most effective and definitive treatment. The procedure is performed under general anaesthesia to ensure patient comfort. Doctor247 connects you with experienced surgeons for safe, precise lipoma removal in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Lipoma Excision?",
      items: [
        "Rapidly growing or enlarging lipoma",
        "Painful lipoma or discomfort in the affected area",
        "Cosmetic concerns about the visible lump",
        "Lipoma in a location that interferes with movement or function",
      ],
    },
    {
      label: "Lipoma Removal Indications",
      items: [
        "Lipoma larger than 5 cm in diameter",
        "Lipoma that causes functional impairment",
        "Suspicious appearance requiring histopathological examination",
        "Patient preference for definitive removal",
      ],
    },
    {
      label: "Complications of Untreated Lipomas",
      items: [
        "Progressive enlargement causing discomfort",
        "Potential for cosmetic disfigurement",
        "Rare possibility of malignant transformation (liposarcoma)",
        "Pressure on surrounding nerves or structures",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Surgical Excision — complete removal with minimal recurrence and excellent cosmetic results",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in soft tissue surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Complete Surgical Excision",
      description:
        "We perform meticulous surgical removal of the lipoma including its capsule, ensuring complete excision and minimal recurrence rates with excellent cosmetic outcomes.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing lipoma excisions with consistently high success rates and excellent cosmetic results.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Painless Procedure Under GA",
      description:
        "General anaesthesia ensures a completely pain-free experience during the procedure. You'll be asleep and comfortable throughout the surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure proper healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the lump",
    "Ultrasound to confirm fatty tissue nature",
    "MRI for deep or large lipomas (if needed)",
    "Blood tests to assess fitness for general anaesthesia",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "An incision is made over the lipoma following natural skin creases for optimal cosmetic results",
    "The lipoma is carefully dissected from surrounding tissues and completely removed",
    "The incision is closed with dissolvable sutures or skin glue",
    "Procedure typically completed within 30-60 minutes depending on size and location",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs as advised to reduce swelling",
    "Attend your follow-up visit within 7-10 days for wound check and histopathology report",
  ],
  postOpDont: [
    "Don't lift heavy weights for 1-2 weeks",
    "Don't soak the wound in water until fully healed",
    "Don't skip your histopathology review appointment",
    "Don't ignore fever, redness, or unusual swelling — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had a large lipoma on my shoulder that was causing discomfort. The surgery was quick, recovery was smooth, and the scar is barely visible. Highly recommend Doctor247.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I was anxious about the procedure but the team made me feel comfortable. The general anaesthesia meant no pain during surgery. Great care and transparent pricing.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The surgeon was highly experienced and removed the lipoma completely. The 90-day follow-ups gave me peace of mind. Excellent experience.”",
      name: "S. Reddy",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is lipoma removal painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative discomfort is minimal and easily managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after lipoma excision?",
      a: "Most patients return to normal activities within 3-5 days. Complete healing of the surgical site takes about 1-2 weeks. You can resume light work within a few days.",
    },
    {
      q: "Is lipoma excision covered by insurance?",
      a: "Yes, lipoma excision is covered by most health insurance plans in India, especially when clinically indicated for pain, rapid growth, or functional impairment. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will the lipoma come back after excision?",
      a: "Recurrence rates are very low (less than 5%) with complete surgical excision including the capsule. If recurrence occurs, it is usually in the form of another lipoma in the same area.",
    },
    {
      q: "What is the difference between local and general anaesthesia for lipoma removal?",
      a: "General anaesthesia ensures you're completely asleep and pain-free during the procedure, which is recommended for larger lipomas, deeper lipomas, or patient preference. Local anaesthesia numbs only the area of surgery. Your surgeon will recommend the best option based on your case.",
    },
  ],
  metaTitle: "Lipoma Excision Surgery in Bangalore | Lipoma Removal — Doctor247",
  metaDescription:
    "Best lipoma removal surgery in Bangalore starting at ₹45,000. Expert lipoma excision under general anaesthesia, cashless insurance, no-cost EMI, experienced surgeons.",
  metaKeywords:
    "lipoma removal surgery in bangalore, lipoma excision cost, lipoma treatment bangalore, fatty lump removal, best surgeon for lipoma, lipoma operation price",
},

"perianal-abscess-incision-drainage": {
  slug: "perianal-abscess-incision-drainage",
  name: "Perianal Abscess - Incision & Drainage (I&D)",
  shortName: "Perianal Abscess",
  price: "₹35,000",
  heroDescription:
    "Safe, effective incision and drainage (I&D) for perianal abscess with expert surgical care, same-day discharge, cashless insurance, no-cost EMI, and free follow-ups. Get immediate relief from perianal infections by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,500+", label: "Perianal Abscess Procedures Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Perianal Abscess?",
  aboutParagraphs: [
    "A perianal abscess is a painful collection of pus that forms in the tissues around the anus or rectum, usually due to an infection of the anal glands. It typically presents as a swollen, red, tender lump near the anus that may be accompanied by fever, pain, and discomfort during sitting or bowel movements.",
    "Incision and drainage (I&D) is the standard surgical treatment for perianal abscesses. The procedure involves making a small incision to drain the pus and relieve pressure, providing immediate relief from pain and preventing the spread of infection. Doctor247 connects you with experienced surgeons for safe, effective perianal abscess treatment in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Perianal Abscess Surgery?",
      items: [
        "A painful, swollen lump near the anus that is red and warm to touch",
        "Increasing pain that worsens with sitting or bowel movements",
        "Fever, chills, or feeling unwell with anal swelling",
        "Pus or discharge from the lump (spontaneous rupture)",
      ],
    },
    {
      label: "Preventing Perianal Abscesses",
      items: [
        "Maintain good anal hygiene",
        "Eat a high-fibre diet to prevent constipation and straining",
        "Treat anal fissures and infections promptly",
        "Stay well-hydrated and maintain regular bowel habits",
      ],
    },
    {
      label: "Complications of Untreated Perianal Abscess",
      items: [
        "Spontaneous rupture with incomplete drainage",
        "Spread of infection to deeper tissues",
        "Development of an anal fistula (abnormal tunnel)",
        "Sepsis in severe, untreated cases (emergency)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Incision & Drainage — precise procedure for immediate relief and complete drainage",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in anorectal procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Effective Incision & Drainage",
      description:
        "We perform precise incision and drainage of the abscess cavity, ensuring complete evacuation of pus and debris with immediate pain relief.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Proctologists",
      description:
        "Our surgeons have extensive experience in treating perianal abscesses with consistently high success rates and low recurrence.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Same-Day Discharge",
      description:
        "Perianal abscess I&D at Doctor247 is a day-care procedure — you can go home the same day and resume light activity within 2-3 days.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the perianal area",
    "Ultrasound (if needed) to assess the extent of the abscess",
    "MRI (for complex or recurrent abscesses)",
    "Blood tests to check for infection markers and fitness for procedure",
  ],
  procedureSteps: [
    "Local or general anaesthesia depending on the case",
    "A small incision is made over the abscess to allow drainage",
    "The abscess cavity is thoroughly explored and all pus is evacuated",
    "The cavity is gently packed with dressing to allow drainage",
    "Procedure typically completed within 15-20 minutes",
  ],
  postOpDo: [
    "Take a warm sitz bath 2-3 times a day for comfort and hygiene",
    "Take prescribed pain relief and antibiotics on schedule",
    "Eat a high-fibre diet and stay well hydrated",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't strain during bowel movements",
    "Don't lift heavy weights for at least 1-2 weeks",
    "Don't ignore continued discharge, fever, or increased pain — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I was in terrible pain from a perianal abscess. The I&D procedure gave me immediate relief. The team was professional and the care was excellent.”",
      name: "R. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“Quick procedure, same-day discharge, and clear aftercare instructions. The 90-day follow-ups ensured I healed properly. Highly recommend Doctor247.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgeon was very skilled and I felt comfortable throughout. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is perianal abscess drainage painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during the drainage. Post-operative discomfort is manageable with prescribed pain medication and warm sitz baths.",
    },
    {
      q: "How long does recovery take after perianal abscess drainage?",
      a: "Most patients return to normal activities within 2-3 days and the wound completely heals within 2-4 weeks. The packing is typically removed in 24-48 hours.",
    },
    {
      q: "Is perianal abscess I&D covered by insurance?",
      a: "Yes, incision and drainage of perianal abscess is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What happens if a perianal abscess is not treated?",
      a: "Untreated perianal abscesses can worsen, leading to spontaneous rupture (often incomplete), spread of infection to deeper tissues, and potential development of an anal fistula requiring more complex surgery.",
    },
    {
      q: "What is the difference between perianal abscess and fistula?",
      a: "A perianal abscess is an acute collection of pus causing immediate pain and swelling. A fistula is an abnormal tunnel or tract that can develop after an abscess, which may require additional surgical treatment if it doesn't heal properly.",
    },
  ],
  metaTitle: "Perianal Abscess I&D Surgery in Bangalore | Incision & Drainage — Doctor247",
  metaDescription:
    "Best perianal abscess treatment in Bangalore starting at ₹35,000. Expert incision and drainage (I&D), same-day discharge, cashless insurance, experienced surgeons.",
  metaKeywords:
    "perianal abscess surgery in bangalore, perianal abscess I&D cost, abscess drainage bangalore, anorectal abscess treatment, best proctologist bangalore, perianal infection treatment",
},

"pilonidal-sinus": {
  slug: "pilonidal-sinus",
  name: "Pilonidal Sinus Excision - With or Without Flap Cover",
  shortName: "Pilonidal Sinus",
  price: "₹31,000",
  heroDescription:
    "Safe, effective pilonidal sinus excision with or without flap cover, expert surgical care, same-day or short-stay discharge, cashless insurance, no-cost EMI, and free follow-ups. Get lasting relief from pilonidal disease by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,000+", label: "Pilonidal Sinus Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Pilonidal Sinus Disease?",
  aboutParagraphs: [
    "A pilonidal sinus is a small tunnel or tract that develops in the skin at the top of the buttocks (sacrococcygeal area). It typically contains hair, debris, and sometimes infection, causing pain, swelling, and discharge. The condition is more common in young adults and those with a sedentary lifestyle, excess body hair, or prolonged sitting.",
    "Surgical excision is the most effective treatment for pilonidal sinus disease. The procedure involves removing the entire sinus tract and surrounding diseased tissue. In some cases, a flap cover is used to close the wound and promote faster healing. Doctor247 connects you with experienced surgeons for safe, effective pilonidal sinus treatment in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Pilonidal Sinus Surgery?",
      items: [
        "Recurrent pilonidal sinus with repeated infections",
        "Painful swelling or abscess in the tailbone area",
        "Persistent discharge of pus or blood from the sinus opening",
        "Chronic sinus that doesn't heal with conservative treatment",
      ],
    },
    {
      label: "Preventing Pilonidal Sinus",
      items: [
        "Maintain good personal hygiene, especially in the buttock area",
        "Keep the area clean and dry",
        "Avoid prolonged sitting without breaks",
        "Remove excess hair from the area regularly",
      ],
    },
    {
      label: "Complications of Untreated Pilonidal Sinus",
      items: [
        "Recurrent infections and abscess formation",
        "Chronic pain and discomfort",
        "Development of multiple sinus tracts",
        "Potential for cellulitis or more severe skin infections",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Excision — complete removal with or without flap closure for optimal healing",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with a minimum of 8 years' experience in pilonidal sinus surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Complete Excision with Flap Option",
      description:
        "We perform meticulous excision of the entire sinus tract and diseased tissue. Flap cover (if indicated) provides a tension-free closure with minimal scarring and faster healing.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing pilonidal sinus surgeries with consistently high success rates and low recurrence.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Customized Surgical Approach",
      description:
        "We tailor the surgical approach to your specific condition — from simple excision and primary closure to advanced flap procedures for complex or recurrent cases.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the sacrococcygeal area",
    "Ultrasound (if needed) to assess the extent of the sinus",
    "MRI (for complex or recurrent cases)",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "Spinal or general anaesthesia depending on the case",
    "The entire sinus tract and surrounding diseased tissue are excised",
    "The wound is closed with primary closure or flap cover (depending on the case)",
    "A drain may be placed if needed",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Take prescribed pain relief and antibiotics on schedule",
    "Avoid sitting for prolonged periods — use a cushion if needed",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't sit for prolonged periods without breaks",
    "Don't lift heavy weights for at least 2-3 weeks",
    "Don't ignore fever, increased pain, or discharge — call us immediately",
    "Don't skip your prescribed medication schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had a pilonidal sinus that kept recurring. The excision with flap cover healed beautifully with minimal scarring. The surgeon was excellent.”",
      name: "R. Kumar",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I was worried about the surgery but the team made me comfortable. The recovery was smooth and the 90-day follow-ups gave me complete peace of mind.”",
      name: "S. Reddy",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgeon's expertise was evident and I'm completely healed now. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is pilonidal sinus surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is managed with prescribed pain medication and typically decreases significantly within a few days.",
    },
    {
      q: "How long does recovery take after pilonidal sinus excision?",
      a: "Most patients return to light activities within 1-2 weeks and full recovery takes 3-4 weeks. With primary closure, recovery is faster. With flap procedures, the healing time may be slightly longer but offers better outcomes.",
    },
    {
      q: "Is pilonidal sinus surgery covered by insurance?",
      a: "Yes, pilonidal sinus excision is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will the pilonidal sinus come back after surgery?",
      a: "Recurrence rates are low with complete excision and proper technique (approximately 1-5%). Maintaining good hygiene and following post-operative care instructions further reduces the risk.",
    },
    {
      q: "What is the difference between simple excision and excision with flap cover?",
      a: "Simple excision involves removing the sinus tract and closing the wound directly (primary closure). Flap cover involves using nearby healthy skin and tissue to cover the wound, which is recommended for larger wounds, deep sinuses, or recurrent cases to ensure better healing.",
    },
  ],
  metaTitle: "Pilonidal Sinus Surgery in Bangalore | Excision With/Without Flap — Doctor247",
  metaDescription:
    "Best pilonidal sinus surgery in Bangalore starting at ₹31,000. Expert excision with or without flap cover, cashless insurance, no-cost EMI, experienced surgeons.",
  metaKeywords:
    "pilonidal sinus surgery in bangalore, pilonidal sinus excision cost, pilonidal sinus treatment, pilonidal sinus with flap cover, best surgeon for pilonidal sinus, tailbone cyst surgery",
},

"modified-radical-mastectomy": {
  slug: "modified-radical-mastectomy",
  name: "Modified Radical Mastectomy (MRM)",
  shortName: "Modified Radical Mastectomy",
  price: "₹90,000",
  heroDescription:
    "Safe, comprehensive modified radical mastectomy for breast cancer treatment with expert surgical care, axillary lymph node clearance, cashless insurance, no-cost EMI, and free follow-ups. Get advanced breast cancer surgery by verified surgical oncologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,500+", label: "Mastectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Modified Radical Mastectomy?",
  aboutParagraphs: [
    "A modified radical mastectomy (MRM) is a surgical procedure for breast cancer that involves removal of the entire breast tissue, the nipple-areola complex, and the axillary (armpit) lymph nodes. Unlike a radical mastectomy, the chest wall muscles are preserved, resulting in better functional outcomes and reduced complications.",
    "This procedure is typically performed for invasive breast cancer and provides comprehensive local control while staging the cancer through lymph node evaluation. Doctor247 connects you with experienced surgical oncologists for safe, effective modified radical mastectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Modified Radical Mastectomy?",
      items: [
        "Invasive breast cancer not suitable for breast-conserving surgery",
        "Large tumor size relative to breast size",
        "Multiple tumors in different quadrants of the breast",
        "Patient preference for mastectomy over lumpectomy",
      ],
    },
    {
      label: "Breast Cancer Risk Factors",
      items: [
        "Regular breast self-examination and mammography screening",
        "Maintain a healthy body weight",
        "Limit alcohol consumption",
        "Know your family history of breast cancer",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive tumor growth with local invasion",
        "Metastasis to lymph nodes and distant organs",
        "Reduced survival rates",
        "Limited treatment options at advanced stages",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Surgical Oncology — comprehensive MRM with precision and safety",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgical Oncologists — every surgeon is credential-checked with extensive experience in breast cancer surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Cancer Surgery",
      description:
        "We perform meticulous MRM with complete removal of breast tissue and axillary lymph node clearance, ensuring optimal local control and accurate staging.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgical Oncologists",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing breast cancer surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Preservation of Chest Wall Muscles",
      description:
        "Unlike radical mastectomy, the pectoralis muscles are preserved in MRM, resulting in better shoulder function, reduced deformity, and improved quality of life.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Mammogram and breast ultrasound",
    "Core needle biopsy or FNAC for tissue diagnosis",
    "MRI breast (if needed for surgical planning)",
    "Chest X-ray, ultrasound abdomen, and bone scan for staging",
    "Blood tests including tumor markers (CA 15-3)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "An elliptical incision is made around the breast tissue",
    "The entire breast tissue, nipple-areola complex, and axillary lymph nodes are removed",
    "Chest wall muscles are preserved",
    "The wound is closed with sutures and drains are placed",
    "Procedure typically completed within 2-3 hours",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Take prescribed pain relief and antibiotics on schedule",
    "Perform gentle shoulder exercises as advised after drain removal",
    "Attend all follow-up visits for wound check and adjuvant treatment planning",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 4-6 weeks",
    "Don't raise the arm on the operated side above shoulder level until cleared",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your adjuvant therapy (chemotherapy/radiotherapy) appointments",
  ],
  testimonials: [
    {
      quote:
        "“I was diagnosed with breast cancer and the MRM surgery was performed with great expertise. The team supported me through the entire journey. I'm recovering well.”",
      name: "L. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The surgeon was highly experienced and explained everything clearly. The preservation of chest muscles means I still have good arm function. Grateful to Doctor247.”",
      name: "S. Nair",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Excellent care from diagnosis to recovery. The 90-day follow-ups and multi-disciplinary approach gave me complete confidence. Highly recommend.”",
      name: "P. Sharma",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is modified radical mastectomy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after MRM?",
      a: "Most patients are discharged within 2-3 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 4-6 weeks. Shoulder exercises should be started after drain removal as advised.",
    },
    {
      q: "Is modified radical mastectomy covered by insurance?",
      a: "Yes, modified radical mastectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between MRM and radical mastectomy?",
      a: "MRM removes the breast tissue and axillary lymph nodes while preserving the chest wall muscles (pectoralis major and minor). Radical mastectomy removes the muscles as well, leading to more deformity and functional limitations. MRM is the current standard of care.",
    },
    {
      q: "Will I need additional treatment after MRM?",
      a: "Most patients require additional treatment after MRM, including chemotherapy, radiotherapy, hormonal therapy, or targeted therapy depending on the tumor characteristics and stage. Your surgical oncologist will coordinate with a multidisciplinary team for comprehensive cancer care.",
    },
  ],
  metaTitle: "Modified Radical Mastectomy in Bangalore | Breast Cancer Surgery — Doctor247",
  metaDescription:
    "Best modified radical mastectomy (MRM) in Bangalore starting at ₹90,000. Expert breast cancer surgery with axillary clearance, cashless insurance, experienced surgical oncologists.",
  metaKeywords:
    "modified radical mastectomy in bangalore, MRM surgery cost, breast cancer surgery bangalore, mastectomy procedure, breast cancer treatment, surgical oncologist bangalore",
},

"simple-mastectomy": {
  slug: "simple-mastectomy",
  name: "Simple Mastectomy",
  shortName: "Simple Mastectomy",
  price: "₹45,000",
  heroDescription:
    "Safe, effective simple mastectomy for breast cancer and high-risk conditions with expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced breast surgery by verified surgical oncologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,000+", label: "Simple Mastectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Simple Mastectomy?",
  aboutParagraphs: [
    "A simple mastectomy (also known as total mastectomy) is a surgical procedure that involves removal of the entire breast tissue, including the nipple-areola complex, but without removal of the axillary (armpit) lymph nodes or chest wall muscles. It is typically performed for ductal carcinoma in situ (DCIS), early-stage breast cancer, or as a risk-reducing procedure for high-risk patients.",
    "This procedure provides effective local control while offering a quicker recovery and fewer complications compared to more extensive mastectomies. Doctor247 connects you with experienced surgical oncologists for safe, effective simple mastectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Simple Mastectomy?",
      items: [
        "Ductal carcinoma in situ (DCIS) where breast-conserving surgery is not suitable",
        "Early-stage invasive breast cancer without clinical lymph node involvement",
        "Prophylactic (risk-reducing) mastectomy for high-risk patients",
        "Multicentric disease (tumors in different quadrants of the breast)",
      ],
    },
    {
      label: "Breast Cancer Prevention & Screening",
      items: [
        "Regular breast self-examination and mammography screening",
        "Maintain a healthy body weight and active lifestyle",
        "Limit alcohol consumption and avoid smoking",
        "Know your family history and consider genetic testing if indicated",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive tumor growth with local invasion",
        "Potential spread to lymph nodes and distant organs",
        "Reduced survival rates with delayed treatment",
        "Limited treatment options at advanced stages",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Surgical Oncology — precise simple mastectomy with excellent outcomes",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgical Oncologists — every surgeon is credential-checked with extensive experience in breast surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Effective Local Control",
      description:
        "We perform complete removal of breast tissue with meticulous surgical technique, ensuring optimal local control with minimal complications.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgical Oncologists",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing breast surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Fewer Complications",
      description:
        "Unlike modified radical mastectomy, simple mastectomy preserves lymph nodes and muscles, resulting in quicker recovery, less pain, and better arm function.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Mammogram and breast ultrasound",
    "Core needle biopsy or FNAC for tissue diagnosis",
    "MRI breast (if needed for surgical planning)",
    "Chest X-ray and ultrasound abdomen for staging",
    "Blood tests including tumor markers (CA 15-3)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "An elliptical incision is made around the breast tissue",
    "The entire breast tissue and nipple-areola complex are removed",
    "Chest wall muscles and axillary lymph nodes are preserved",
    "The wound is closed with sutures and drains are placed",
    "Procedure typically completed within 1.5-2 hours",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Take prescribed pain relief and antibiotics on schedule",
    "Start gentle shoulder exercises after drain removal as advised",
    "Attend all follow-up visits for wound check and treatment planning",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 4-6 weeks",
    "Don't raise the arm on the operated side above shoulder level until cleared",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your adjuvant therapy (chemotherapy/radiotherapy) appointments",
  ],
  testimonials: [
    {
      quote:
        "“I was diagnosed with DCIS and needed a simple mastectomy. The surgery was smooth, recovery was quicker than I expected, and the team was very supportive.”",
      name: "M. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I chose simple mastectomy as a risk-reducing measure due to my family history. The surgeon explained everything clearly and the care was excellent.”",
      name: "S. Nair",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete peace of mind. Highly recommend Doctor247.”",
      name: "P. Sharma",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is simple mastectomy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after simple mastectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 3-4 weeks.",
    },
    {
      q: "Is simple mastectomy covered by insurance?",
      a: "Yes, simple mastectomy is covered by most health insurance plans in India for breast cancer treatment and risk-reducing procedures. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between simple mastectomy and modified radical mastectomy?",
      a: "Simple mastectomy removes only the breast tissue while preserving axillary lymph nodes and chest wall muscles. Modified radical mastectomy removes both the breast tissue and axillary lymph nodes. Simple mastectomy is typically used for DCIS or early-stage cancer without lymph node involvement.",
    },
    {
      q: "Will I need additional treatment after simple mastectomy?",
      a: "Depending on the pathology results, you may need additional treatment such as chemotherapy, radiotherapy, hormonal therapy, or targeted therapy. Your surgical oncologist will coordinate with a multidisciplinary team for comprehensive cancer care.",
    },
  ],
  metaTitle: "Simple Mastectomy in Bangalore | Breast Cancer Surgery — Doctor247",
  metaDescription:
    "Best simple mastectomy in Bangalore starting at ₹45,000. Expert breast surgery for DCIS and early-stage cancer, cashless insurance, experienced surgical oncologists.",
  metaKeywords:
    "simple mastectomy in bangalore, mastectomy cost bangalore, breast cancer surgery bangalore, total mastectomy procedure, risk-reducing mastectomy, surgical oncologist bangalore",
},

"breast-lumpectomy": {
  slug: "breast-lumpectomy",
  name: "Breast Lumpectomy",
  shortName: "Breast Lumpectomy",
  price: "₹45,000",
  heroDescription:
    "Safe, precise breast lumpectomy (breast-conserving surgery) for early-stage breast cancer with expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced breast cancer treatment by verified surgical oncologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Breast Lumpectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Breast Lumpectomy?",
  aboutParagraphs: [
    "A breast lumpectomy (also known as breast-conserving surgery or partial mastectomy) is a surgical procedure that removes a cancerous tumor from the breast along with a margin of healthy tissue, while preserving the rest of the breast. This procedure is typically performed for early-stage breast cancer and offers the advantage of breast preservation.",
    "Lumpectomy is followed by radiation therapy in most cases to ensure complete local control. It provides equivalent survival outcomes to mastectomy for early-stage breast cancer while maintaining natural breast appearance. Doctor247 connects you with experienced surgical oncologists for safe, precise breast lumpectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Breast Lumpectomy?",
      items: [
        "Single, localized tumor less than 4-5 cm in size",
        "Favorable tumor-to-breast size ratio for good cosmetic outcome",
        "Early-stage breast cancer (Stage I or II)",
        "Patient preference for breast preservation",
      ],
    },
    {
      label: "Breast Cancer Prevention & Screening",
      items: [
        "Regular breast self-examination and mammography screening",
        "Maintain a healthy body weight and active lifestyle",
        "Limit alcohol consumption and avoid smoking",
        "Know your family history and consider genetic testing if indicated",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive tumor growth with local invasion",
        "Potential spread to lymph nodes and distant organs",
        "Reduced survival rates with delayed treatment",
        "Limited treatment options at advanced stages",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Breast Conservation Surgery — precise lumpectomy with excellent oncological and cosmetic outcomes",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgical Oncologists — every surgeon is credential-checked with extensive experience in breast conservation surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Breast Conservation",
      description:
        "We perform meticulous lumpectomy with adequate margins for optimal cancer control while preserving maximum healthy breast tissue for the best cosmetic outcome.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgical Oncologists",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing breast conservation surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Breast Preservation & Better Cosmesis",
      description:
        "Unlike mastectomy, lumpectomy preserves the natural breast shape, resulting in better body image and improved quality of life for patients.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Mammogram and breast ultrasound for localization",
    "Core needle biopsy with wire localization (if needed)",
    "MRI breast (if needed for surgical planning)",
    "Chest X-ray and ultrasound abdomen for staging",
    "Blood tests including tumor markers (CA 15-3)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "Wire localization or intraoperative ultrasound may be used for tumor localization",
    "An incision is made over the tumor site, following natural skin creases",
    "The tumor along with a margin of healthy tissue is removed",
    "The specimen is sent for intraoperative or postoperative margin assessment",
    "The wound is closed with sutures and a drain may be placed if needed",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Take prescribed pain relief and antibiotics on schedule",
    "Start gentle arm exercises as advised",
    "Attend all follow-up visits for wound check and radiation therapy planning",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 2-3 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your radiation therapy appointments",
    "Don't delay your follow-up mammograms as advised",
  ],
  testimonials: [
    {
      quote:
        "“I was relieved to learn I could preserve my breast with lumpectomy. The surgery was precise and the scar is barely visible. Excellent care from Doctor247.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The surgeon did an amazing job removing the tumor with clear margins. Recovery was smooth and I'm grateful for the breast preservation.”",
      name: "R. Nair",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups and radiation planning support gave me complete confidence. Highly recommend.”",
      name: "P. Sharma",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is breast lumpectomy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first few days.",
    },
    {
      q: "How long does recovery take after breast lumpectomy?",
      a: "Most patients return to light activities within 1-2 weeks and full recovery takes 3-4 weeks. Radiation therapy usually begins 2-4 weeks after surgery.",
    },
    {
      q: "Is breast lumpectomy covered by insurance?",
      a: "Yes, breast lumpectomy is covered by most health insurance plans in India for breast cancer treatment. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between lumpectomy and mastectomy?",
      a: "Lumpectomy removes only the tumor with a margin of healthy tissue while preserving the rest of the breast. Mastectomy removes the entire breast tissue. Lumpectomy is typically followed by radiation therapy.",
    },
    {
      q: "Will I need additional treatment after lumpectomy?",
      a: "Yes, almost all patients require radiation therapy after lumpectomy to reduce the risk of local recurrence. Depending on the pathology, you may also need chemotherapy, hormonal therapy, or targeted therapy.",
    },
  ],
  metaTitle: "Breast Lumpectomy in Bangalore | Breast Conservation Surgery — Doctor247",
  metaDescription:
    "Best breast lumpectomy in Bangalore starting at ₹45,000. Expert breast-conserving surgery for early-stage cancer, cashless insurance, experienced surgical oncologists.",
  metaKeywords:
    "breast lumpectomy in bangalore, breast conservation surgery cost, lumpectomy surgery bangalore, breast tumor removal, early-stage breast cancer treatment, surgical oncologist bangalore",
},

"thyroidectomy": {
  slug: "thyroidectomy",
  name: "Thyroidectomy (Total / Partial / Subtotal)",
  shortName: "Thyroidectomy",
  price: "₹70,000",
  heroDescription:
    "Safe, precise thyroidectomy for thyroid disorders including total, partial, and subtotal removal with expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced thyroid surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,500+", label: "Thyroidectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Thyroidectomy?",
  aboutParagraphs: [
    "A thyroidectomy is a surgical procedure that involves partial or complete removal of the thyroid gland, a butterfly-shaped organ located in the front of the neck that produces hormones regulating metabolism. This surgery is performed for various thyroid conditions including thyroid nodules, goiter, hyperthyroidism, and thyroid cancer.",
    "Depending on the condition, the surgeon may perform a total thyroidectomy (removal of the entire gland), partial thyroidectomy (removal of one lobe), or subtotal thyroidectomy (removal of most of the gland). Doctor247 connects you with experienced surgeons for safe, effective thyroid surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Thyroidectomy?",
      items: [
        "Suspicious thyroid nodules or confirmed thyroid cancer",
        "Large goiter causing compression symptoms (difficulty breathing/swallowing)",
        "Hyperthyroidism not controlled with medication or radioactive iodine",
        "Recurrent thyroid nodules despite previous surgery",
      ],
    },
    {
      label: "Thyroid Health & Prevention",
      items: [
        "Monitor iodine intake (not too high, not too low)",
        "Get regular thyroid function tests if you have risk factors",
        "Avoid radiation exposure to the neck area when possible",
        "Know your family history of thyroid conditions",
      ],
    },
    {
      label: "Complications of Untreated Thyroid Conditions",
      items: [
        "Progressive growth of thyroid nodules or cancer spread",
        "Airway compression from large goiter causing breathing difficulty",
        "Esophageal compression causing swallowing problems",
        "Hyperthyroidism complications including cardiac arrhythmias",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Thyroid Surgery — precise total, partial, or subtotal thyroidectomy",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in thyroid surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Thyroid Surgery",
      description:
        "We perform meticulous thyroidectomy with careful identification and preservation of vital structures including the recurrent laryngeal nerves (voice) and parathyroid glands (calcium regulation).",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Thyroid Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing thyroid surgeries with consistently high success rates and low complication rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Customized Approach for Every Patient",
      description:
        "We tailor the surgical approach to your specific condition — total, partial, or subtotal thyroidectomy based on your diagnosis, ensuring the best possible outcome.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery to monitor thyroid function.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Ultrasound of the thyroid gland with nodule assessment",
    "Thyroid function tests (T3, T4, TSH)",
    "Fine needle aspiration cytology (FNAC) for suspicious nodules",
    "CT or MRI (if needed for large goiters)",
    "Laryngoscopy for vocal cord assessment",
    "Blood tests to assess calcium levels and fitness for surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "A small incision is made in the lower neck, following natural skin creases",
    "The thyroid gland is carefully exposed and mobilized",
    "The recurrent laryngeal nerves and parathyroid glands are identified and preserved",
    "Total, partial, or subtotal thyroidectomy is performed based on the condition",
    "The wound is closed with sutures and a drain may be placed if needed",
    "Procedure typically completed within 1.5-3 hours depending on the type",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Take prescribed pain relief, antibiotics, and calcium supplements (if needed) on schedule",
    "Monitor for symptoms of hypocalcemia (tingling, muscle cramps)",
    "Attend all follow-up visits for wound check and thyroid function monitoring",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 2-3 weeks",
    "Don't ignore tingling, muscle cramps, or voice changes — call us immediately",
    "Don't skip your thyroid hormone replacement (if prescribed)",
    "Don't delay your follow-up appointments for thyroid function monitoring",
  ],
  testimonials: [
    {
      quote:
        "“I had a large goiter causing breathing difficulty. The thyroidectomy was performed with great precision. My voice is intact and I'm breathing much better now.”",
      name: "R. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I was anxious about thyroid surgery but the surgeon explained everything clearly. The recovery was smooth and the scar is minimal. Highly recommend Doctor247.”",
      name: "S. Nair",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Excellent care from diagnosis to recovery. The 90-day follow-ups and regular thyroid function monitoring gave me complete confidence. Thank you Doctor247.”",
      name: "P. Sharma",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is thyroidectomy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first few days.",
    },
    {
      q: "How long does recovery take after thyroidectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 3-4 weeks.",
    },
    {
      q: "Is thyroidectomy covered by insurance?",
      a: "Yes, thyroidectomy is covered by most health insurance plans in India for thyroid disorders including cancer and hyperthyroidism. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between total, partial, and subtotal thyroidectomy?",
      a: "Total thyroidectomy removes the entire gland. Partial thyroidectomy removes only one lobe (lobectomy) or part of one lobe. Subtotal thyroidectomy removes most of the gland leaving a small portion. The choice depends on your diagnosis and condition.",
    },
    {
      q: "Will I need thyroid hormone replacement after surgery?",
      a: "If you have a total thyroidectomy or most of the gland is removed, you will need lifelong thyroid hormone replacement. If only one lobe is removed, the remaining lobe may produce enough hormone and you may not need replacement. Your surgeon will monitor your thyroid function and prescribe accordingly.",
    },
  ],
  metaTitle: "Thyroidectomy in Bangalore | Total / Partial / Subtotal — Doctor247",
  metaDescription:
    "Best thyroidectomy in Bangalore starting at ₹70,000. Expert total, partial, and subtotal thyroid removal, cashless insurance, no-cost EMI, experienced surgeons.",
  metaKeywords:
    "thyroidectomy in bangalore, thyroid surgery cost, total thyroidectomy, partial thyroidectomy, thyroid removal surgery, best surgeon for thyroid bangalore",
},

"varicose-veins-unilateral": {
  slug: "varicose-veins-unilateral",
  name: "Varicose Veins Surgery - Saphenofemoral Ligation & Stripping / Sclerotherapy (Unilateral)",
  shortName: "Varicose Veins",
  price: "₹41,500",
  heroDescription:
    "Safe, effective varicose veins treatment with saphenofemoral ligation, stripping, or sclerotherapy for unilateral leg involvement. Expert vascular care, cashless insurance, no-cost EMI, and free follow-ups. Get relief from painful varicose veins by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,500+", label: "Varicose Vein Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Varicose Veins?",
  aboutParagraphs: [
    "Varicose veins are swollen, twisted, and enlarged veins that most commonly occur in the legs. They develop when the valves inside the veins malfunction, causing blood to pool and the veins to stretch and bulge. This condition can cause pain, aching, heaviness, swelling, and cosmetic concerns.",
    "Treatment options include saphenofemoral ligation (tying off the vein at its junction), stripping (removal of the diseased vein), and sclerotherapy (injection of a solution to close the vein). Doctor247 connects you with experienced vascular surgeons for safe, effective varicose vein treatment in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Varicose Vein Surgery?",
      items: [
        "Persistent pain, aching, or heaviness in the legs",
        "Visible swollen, twisted veins that cause cosmetic concern",
        "Swelling in the legs and ankles",
        "Skin changes including discoloration, thickening, or ulcers near the ankles",
      ],
    },
    {
      label: "Preventing Varicose Veins",
      items: [
        "Maintain a healthy body weight",
        "Regular exercise including walking and calf muscle exercises",
        "Avoid prolonged standing or sitting without breaks",
        "Elevate your legs when resting",
      ],
    },
    {
      label: "Complications of Untreated Varicose Veins",
      items: [
        "Chronic venous insufficiency causing skin changes",
        "Venous ulcers (open sores near the ankles)",
        "Superficial thrombophlebitis (blood clot in a superficial vein)",
        "Bleeding from ruptured varicose veins",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Varicose Vein Treatment — saphenofemoral ligation, stripping, and sclerotherapy options",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in vascular surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Varicose Vein Treatment",
      description:
        "We offer multiple treatment options including saphenofemoral ligation, vein stripping, and sclerotherapy, tailored to your specific condition for the best outcomes.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Vascular Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing varicose vein procedures with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Effective & Lasting Results",
      description:
        "Our surgical techniques provide long-lasting relief from varicose veins with improved leg appearance and reduced symptoms.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the legs",
    "Doppler ultrasound to assess venous reflux and valve function",
    "Duplex ultrasound for detailed mapping of veins",
    "Blood tests to assess fitness for surgery",
  ],
  procedureSteps: [
    "Local, spinal, or general anaesthesia depending on the case",
    "A small incision is made in the groin for saphenofemoral ligation",
    "The great saphenous vein is tied off at its junction (ligation)",
    "The diseased vein may be stripped (removed) or treated with sclerotherapy",
    "The wound is closed with sutures and compression bandages are applied",
    "Procedure typically completed within 60-90 minutes",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry",
    "Wear compression stockings as advised by your surgeon",
    "Walk short distances from day 1 to aid circulation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 2-3 weeks",
    "Don't stand or sit for prolonged periods without breaks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your compression stocking schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had painful varicose veins in my leg for years. The saphenofemoral ligation and stripping gave me complete relief. The surgeon was excellent and the recovery was smooth.”",
      name: "R. Kumar",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The sclerotherapy treatment was quick and effective. My leg looks so much better now and the pain is completely gone. Highly recommend Doctor247.”",
      name: "S. Reddy",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete peace of mind. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is varicose vein surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is manageable with prescribed pain medication and typically decreases significantly within the first few days.",
    },
    {
      q: "How long does recovery take after varicose vein surgery?",
      a: "Most patients return to light activities within 1-2 weeks and full recovery takes 3-4 weeks. Wearing compression stockings and walking regularly aids faster recovery.",
    },
    {
      q: "Is varicose vein surgery covered by insurance?",
      a: "Yes, varicose vein surgery is covered by most health insurance plans in India when clinically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between ligation, stripping, and sclerotherapy?",
      a: "Ligation involves tying off the vein at its junction. Stripping involves removing the diseased vein entirely. Sclerotherapy involves injecting a solution into the vein to close it. Your surgeon will recommend the best option based on your condition.",
    },
    {
      q: "Will varicose veins come back after surgery?",
      a: "Recurrence is possible but uncommon with proper surgical technique. Maintaining a healthy lifestyle, wearing compression stockings, and following post-operative guidelines reduces the risk of recurrence.",
    },
  ],
  metaTitle: "Varicose Veins Surgery in Bangalore | Ligation, Stripping & Sclerotherapy — Doctor247",
  metaDescription:
    "Best varicose veins treatment in Bangalore starting at ₹41,500. Expert saphenofemoral ligation, stripping & sclerotherapy, cashless insurance, experienced surgeons.",
  metaKeywords:
    "varicose veins surgery in bangalore, varicose veins treatment cost, saphenofemoral ligation, vein stripping, sclerotherapy treatment, vascular surgeon bangalore",
},

"varicose-veins-laser-rfa": {
  slug: "varicose-veins-laser-rfa",
  name: "Varicose Veins - Radiofrequency Ablation / Endovenous Laser Treatment",
  shortName: "Laser/RFA Varicose Veins",
  price: "₹33,000",
  heroDescription:
    "Advanced radiofrequency ablation (RFA) and endovenous laser treatment (EVLT) for varicose veins with minimal pain, faster recovery, no scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art varicose vein treatment by verified vascular surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "4,000+", label: "Laser/RFA Procedures Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Varicose Veins?",
  aboutParagraphs: [
    "Varicose veins are swollen, twisted, and enlarged veins that most commonly occur in the legs. They develop when the valves inside the veins malfunction, causing blood to pool and the veins to stretch and bulge. This condition can cause pain, aching, heaviness, swelling, and cosmetic concerns.",
    "Radiofrequency ablation (RFA) and endovenous laser treatment (EVLT) are modern, minimally invasive treatments for varicose veins. These procedures use heat energy (radiofrequency or laser) to close the diseased vein from inside, rerouting blood to healthier veins. Doctor247 connects you with experienced vascular surgeons for advanced, scar-free varicose vein treatment in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laser/RFA Varicose Vein Treatment?",
      items: [
        "Persistent pain, aching, or heaviness in the legs",
        "Visible swollen, twisted veins causing cosmetic concern",
        "Swelling in the legs and ankles",
        "Skin changes including discoloration, thickening, or ulcers near the ankles",
      ],
    },
    {
      label: "Preventing Varicose Veins",
      items: [
        "Maintain a healthy body weight",
        "Regular exercise including walking and calf muscle exercises",
        "Avoid prolonged standing or sitting without breaks",
        "Elevate your legs when resting",
      ],
    },
    {
      label: "Complications of Untreated Varicose Veins",
      items: [
        "Chronic venous insufficiency causing skin changes",
        "Venous ulcers (open sores near the ankles)",
        "Superficial thrombophlebitis (blood clot)",
        "Bleeding from ruptured varicose veins",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced RFA & EVLT — state-of-the-art minimally invasive treatment with no scars",
        "Free Follow-ups — post-procedure consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your treatment cost into easy monthly instalments with zero interest",
        "Verified Vascular Surgeons — every surgeon is credential-checked with extensive experience in laser/RFA vein treatment",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced RFA & EVLT Technology",
      description:
        "We use state-of-the-art radiofrequency ablation and endovenous laser technology to close diseased veins from inside, providing excellent results with minimal discomfort and no scarring.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Minimally Invasive with No Scarring",
      description:
        "Unlike traditional vein stripping, RFA and EVLT require only a tiny puncture, leaving no visible scars. The procedure is performed under local anaesthesia with immediate return to normal activities.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Immediate Relief",
      description:
        "Most patients resume normal activities within 24-48 hours. The procedure provides immediate relief from pain, heaviness, and swelling with excellent cosmetic results.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure to ensure complete healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the legs",
    "Doppler ultrasound to assess venous reflux and valve function",
    "Duplex ultrasound for detailed mapping of veins",
    "Blood tests to assess fitness for the procedure",
  ],
  procedureSteps: [
    "Local anaesthesia is administered (no general anaesthesia needed)",
    "A tiny puncture is made, and a catheter is inserted into the diseased vein",
    "Radiofrequency or laser energy is delivered through the catheter to close the vein",
    "The vein collapses and is sealed, rerouting blood to healthier veins",
    "A small bandage is applied — no stitches required",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Wear compression stockings as advised by your surgeon",
    "Walk short distances from day 1 to aid circulation",
    "Keep the treated area clean and dry",
    "Attend your follow-up visit within 7-10 days for evaluation",
  ],
  postOpDont: [
    "Don't lift heavy weights or perform strenuous activities for 1-2 weeks",
    "Don't stand or sit for prolonged periods without breaks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your compression stocking schedule",
  ],
  testimonials: [
    {
      quote:
        "“I had painful varicose veins and was nervous about surgery. The laser treatment was quick, painless, and left no scars. I'm so happy with the results!”",
      name: "S. Kumar",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The RFA procedure was amazing. I walked in and walked out the same day. My legs feel so much better now. Highly recommend Doctor247.”",
      name: "R. Reddy",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“No scars, no pain, and no downtime. The team was very professional and the 90-day follow-ups ensured complete healing. Excellent experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laser/RFA varicose vein treatment painful?",
      a: "The procedure is performed under local anaesthesia so you won't feel pain during treatment. Most patients experience only mild discomfort during recovery, which is easily managed.",
    },
    {
      q: "How long does recovery take after laser/RFA treatment?",
      a: "Most patients resume normal activities within 24-48 hours. You can return to work the next day. Full recovery typically takes 1-2 weeks.",
    },
    {
      q: "Is laser/RFA varicose vein treatment covered by insurance?",
      a: "Yes, RFA and EVLT are covered by most health insurance plans in India when clinically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between RFA and EVLT?",
      a: "Both are minimally invasive treatments that use heat to close diseased veins. RFA uses radiofrequency energy, while EVLT uses laser energy. Both are highly effective with excellent outcomes. Your surgeon will recommend the best option based on your condition.",
    },
    {
      q: "Will varicose veins come back after laser/RFA treatment?",
      a: "Recurrence is possible but uncommon. The treated vein will not return as it is permanently closed. New varicose veins can develop, but with proper lifestyle changes and follow-up, the risk is minimal.",
    },
  ],
  metaTitle: "Laser & RFA Varicose Veins Treatment in Bangalore | EVLT — Doctor247",
  metaDescription:
    "Best laser and RFA varicose veins treatment in Bangalore starting at ₹33,000. Advanced endovenous laser & radiofrequency ablation, no scars, cashless insurance.",
  metaKeywords:
    "laser varicose veins treatment bangalore, RFA varicose veins, EVLT treatment, endovenous laser treatment, varicose veins laser cost, vascular surgeon bangalore",
},

"wound-debridement-minor": {
  slug: "wound-debridement-minor",
  name: "Wound Debridement - Minor",
  shortName: "Minor Wound Debridement",
  price: "₹15,000",
  heroDescription:
    "Safe, effective minor wound debridement for infected, non-healing, or chronic wounds with expert wound care, cashless insurance, no-cost EMI, and free follow-ups. Get professional wound management by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "5,000+", label: "Wound Debridement Procedures Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Wound Debridement?",
  aboutParagraphs: [
    "Wound debridement is a medical procedure that involves the removal of dead, damaged, or infected tissue from a wound to promote healing. This is essential for wounds that are not healing properly, as dead tissue can harbor bacteria and prevent new healthy tissue from growing.",
    "Minor wound debridement is performed for smaller wounds, superficial infections, or as part of ongoing wound care management. The procedure cleans the wound bed, removes non-viable tissue, and creates an optimal environment for healing. Doctor247 connects you with experienced surgeons for safe, effective wound debridement in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Wound Debridement?",
      items: [
        "Non-healing wounds that show no improvement after 2-3 weeks",
        "Wounds with visible dead tissue, slough, or eschar (black tissue)",
        "Infected wounds with purulent discharge or surrounding redness",
        "Chronic wounds including diabetic foot ulcers, pressure ulcers, and venous ulcers",
      ],
    },
    {
      label: "Preventing Wound Complications",
      items: [
        "Keep wounds clean and covered with appropriate dressings",
        "Control blood sugar levels in diabetic patients",
        "Maintain good nutrition for optimal wound healing",
        "Avoid smoking as it delays wound healing",
      ],
    },
    {
      label: "Complications of Untreated Wounds",
      items: [
        "Progressive infection spreading to deeper tissues",
        "Development of abscesses or cellulitis",
        "Chronic non-healing ulcers with potential for amputation",
        "Sepsis in severe, untreated infections",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Wound Care — thorough debridement with minimal discomfort",
        "Free Follow-ups — post-debridement consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in wound management",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Thorough Debridement",
      description:
        "We perform meticulous removal of all non-viable, necrotic, or infected tissue, creating a clean wound bed that promotes faster and healthier healing.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Wound Care Specialists",
      description:
        "Our surgeons have extensive experience in managing all types of wounds including diabetic ulcers, pressure ulcers, traumatic wounds, and post-surgical wounds.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimal Discomfort",
      description:
        "We use appropriate anaesthesia and gentle techniques to ensure minimal pain and discomfort during the procedure.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations to monitor wound healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the wound",
    "Wound swab for culture and sensitivity (if infection is suspected)",
    "Blood tests to assess infection markers and general health",
    "Doppler studies (if vascular compromise is suspected)",
  ],
  procedureSteps: [
    "Local anaesthesia is administered for a pain-free procedure",
    "The wound is cleaned with sterile solution",
    "Dead, damaged, or infected tissue is carefully removed using surgical instruments",
    "The wound bed is irrigated to remove debris",
    "An appropriate dressing is applied",
    "Procedure typically completed within 15-30 minutes",
  ],
  postOpDo: [
    "Keep the wound clean and dry as advised",
    "Change dressings as per the schedule provided",
    "Take prescribed antibiotics and pain relief on schedule",
    "Attend follow-up visits for wound assessment and dressing changes",
  ],
  postOpDont: [
    "Don't expose the wound to dirty or contaminated water",
    "Don't ignore increased redness, pain, or discharge — call us immediately",
    "Don't remove dressings prematurely",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a diabetic foot ulcer that wasn't healing. The debridement procedure was quick and painless. With proper care, my wound is healing beautifully now.”",
      name: "R. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My post-surgical wound wasn't healing well. The debridement cleared the dead tissue and my wound started healing within days. Excellent care.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The team was very professional and explained everything clearly. The 90-day follow-ups ensured my wound healed completely. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is wound debridement painful?",
      a: "The procedure is performed under local anaesthesia so you won't feel significant pain during debridement. Some mild discomfort may be experienced, which is easily managed.",
    },
    {
      q: "How long does recovery take after wound debridement?",
      a: "The wound itself may take 1-4 weeks to heal depending on its size and your overall health. Most patients resume normal activities immediately after the procedure.",
    },
    {
      q: "Is wound debridement covered by insurance?",
      a: "Yes, wound debridement is covered by most health insurance plans in India when clinically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "How many sessions of debridement will I need?",
      a: "This depends on the wound's condition. Some wounds may require a single session, while others with extensive dead tissue may need multiple sessions for complete healing.",
    },
    {
      q: "What happens if a wound is not debrided?",
      a: "Without debridement, dead tissue can harbor bacteria, delay healing, increase the risk of infection, and prevent new healthy tissue from forming. This can lead to chronic wounds and potentially serious complications.",
    },
  ],
  metaTitle: "Wound Debridement in Bangalore | Minor Wound Care — Doctor247",
  metaDescription:
    "Best minor wound debridement in Bangalore starting at ₹15,000. Expert wound care for non-healing wounds, cashless insurance, experienced surgeons.",
  metaKeywords:
    "wound debridement in bangalore, minor wound debridement cost, wound care treatment, diabetic foot ulcer treatment, wound debridement surgery, wound management bangalore",
},

"wound-debridement-major": {
  slug: "wound-debridement-major",
  name: "Wound Debridement - Major",
  shortName: "Major Wound Debridement",
  price: "₹25,000",
  heroDescription:
    "Safe, comprehensive major wound debridement for extensive, infected, or non-healing wounds with expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced wound management by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "3,500+", label: "Major Wound Debridements Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Major Wound Debridement?",
  aboutParagraphs: [
    "Major wound debridement is an extensive surgical procedure that involves the removal of large amounts of dead, damaged, or infected tissue from a wound to promote healing and prevent life-threatening complications. This is essential for complex wounds, extensive burns, necrotizing infections, or wounds that involve deeper tissues including muscle, fascia, or bone.",
    "Major debridement is performed in a sterile operating room under anaesthesia, often requiring hospital admission. The procedure converts a necrotic, infected wound into a clean, viable wound that can heal or be closed with grafts. Doctor247 connects you with experienced surgeons for safe, effective major wound debridement in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Major Wound Debridement?",
      items: [
        "Extensive wounds with large areas of dead or infected tissue",
        "Deep wounds involving muscle, fascia, or bone",
        "Necrotizing fasciitis or gas gangrene (emergency)",
        "Non-healing wounds that have failed minor debridement",
      ],
    },
    {
      label: "Preventing Wound Complications",
      items: [
        "Keep wounds clean and covered with appropriate dressings",
        "Control blood sugar levels in diabetic patients",
        "Maintain good nutrition for optimal wound healing",
        "Avoid smoking as it delays wound healing",
      ],
    },
    {
      label: "Complications of Untreated Wounds",
      items: [
        "Progressive infection spreading to deeper tissues",
        "Development of abscesses or cellulitis",
        "Chronic non-healing ulcers with potential for amputation",
        "Sepsis in severe, untreated infections",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Major Wound Care — comprehensive debridement with multidisciplinary approach",
        "Free Follow-ups — post-debridement consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in complex wound management",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Major Debridement",
      description:
        "We perform extensive removal of all non-viable, necrotic, or infected tissue including deep structures, creating a clean wound bed for optimal healing.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Wound Care Specialists",
      description:
        "Our surgeons have extensive experience in managing complex wounds including necrotizing infections, burns, diabetic foot ulcers, and pressure ulcers.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Multidisciplinary Approach",
      description:
        "We work with a team of specialists including infectious disease experts, plastic surgeons, and wound care nurses for comprehensive management.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations to monitor wound healing.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the wound with assessment of depth and extent",
    "Wound swab for culture and sensitivity (if infection is suspected)",
    "Blood tests including CBC, CRP, and blood culture",
    "Imaging studies (MRI or CT) to assess deep tissue involvement",
    "Doppler studies for vascular assessment",
  ],
  procedureSteps: [
    "General or spinal anaesthesia depending on the case",
    "The wound is cleaned and prepared in sterile conditions",
    "All dead, damaged, or infected tissue is carefully excised down to healthy tissue",
    "Bone debridement may be performed if involved",
    "The wound is thoroughly irrigated with antibiotic solution",
    "Negative pressure wound therapy (NPWT) may be applied",
    "Procedure typically completed within 60-120 minutes depending on extent",
  ],
  postOpDo: [
    "Keep the wound clean and dry as advised",
    "Change dressings as per the schedule provided",
    "Take prescribed antibiotics, pain relief, and other medications on schedule",
    "Attend all follow-up visits for wound assessment and dressing changes",
    "Follow nutritional recommendations for optimal healing",
  ],
  postOpDont: [
    "Don't expose the wound to dirty or contaminated water",
    "Don't ignore increased redness, pain, or discharge — call us immediately",
    "Don't remove dressings or negative pressure therapy devices prematurely",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a severe diabetic foot infection requiring major debridement. The surgery saved my foot from amputation. The team was excellent and the care was outstanding.”",
      name: "R. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My pressure ulcer was deep and infected. The major debridement was done with great expertise. My wound is now healing beautifully with the follow-up care.”",
      name: "S. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The multidisciplinary team at Doctor247 saved my life from a severe infection. The 90-day follow-ups and wound care support were exceptional. Highly recommend.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is major wound debridement painful?",
      a: "The procedure is performed under general or spinal anaesthesia so you won't feel pain during debridement. Post-operative pain is managed with prescribed medication.",
    },
    {
      q: "How long does recovery take after major wound debridement?",
      a: "Hospital stay may range from 3-7 days depending on the wound. Complete wound healing may take several weeks to months depending on the extent and your overall health.",
    },
    {
      q: "Is major wound debridement covered by insurance?",
      a: "Yes, major wound debridement is covered by most health insurance plans in India when clinically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between minor and major debridement?",
      a: "Minor debridement is performed on smaller, more superficial wounds with limited tissue removal, often under local anaesthesia. Major debridement involves extensive tissue removal, deeper structures, and is performed in an operating room under general/spinal anaesthesia with hospital admission.",
    },
    {
      q: "What happens after major debridement?",
      a: "After major debridement, the wound may be closed primarily, left to heal by secondary intention, or covered with skin grafts/flaps. Negative pressure wound therapy is often used to promote healing. You will have regular follow-up visits for wound care.",
    },
  ],
  metaTitle: "Major Wound Debridement in Bangalore | Complex Wound Care — Doctor247",
  metaDescription:
    "Best major wound debridement in Bangalore starting at ₹25,000. Expert complex wound care, cashless insurance, multidisciplinary approach, experienced surgeons.",
  metaKeywords:
    "major wound debridement in bangalore, complex wound care, surgical debridement cost, diabetic foot ulcer surgery, wound debridement treatment, wound management bangalore",
},

"hysterectomy-abdominal": {
  slug: "hysterectomy-abdominal",
  name: "Hysterectomy - Abdominal (With or Without BSO & Adhesiolysis)",
  shortName: "Abdominal Hysterectomy",
  price: "₹58,500",
  heroDescription:
    "Safe, comprehensive abdominal hysterectomy with or without bilateral salpingo-oophorectomy (BSO) and adhesiolysis for gynaecological conditions. Expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Hysterectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Abdominal Hysterectomy?",
  aboutParagraphs: [
    "An abdominal hysterectomy is a surgical procedure that involves the removal of the uterus through an incision in the lower abdomen. It may be performed with or without bilateral salpingo-oophorectomy (BSO) — removal of the fallopian tubes and ovaries. Adhesiolysis (removal of scar tissue) may also be performed if adhesions are present from previous surgeries or conditions.",
    "This procedure is commonly performed for conditions such as uterine fibroids, endometriosis, abnormal uterine bleeding, uterine prolapse, and gynaecological cancers. Doctor247 connects you with experienced gynaecological surgeons for safe, effective abdominal hysterectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Abdominal Hysterectomy?",
      items: [
        "Large uterine fibroids causing pain, pressure, or heavy bleeding",
        "Endometriosis not responding to medical management",
        "Uterine prolapse causing discomfort or urinary issues",
        "Gynaecological cancers (uterine, cervical, ovarian)",
      ],
    },
    {
      label: "Gynaecological Health & Prevention",
      items: [
        "Regular gynaecological check-ups and Pap smears",
        "Maintain a healthy body weight",
        "Monitor and manage abnormal uterine bleeding promptly",
        "Know your family history of gynaecological conditions",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive symptoms of fibroids including heavy bleeding",
        "Chronic pain from endometriosis",
        "Fertility issues and pregnancy complications",
        "Progression of gynaecological cancers",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Gynaecological Surgery — comprehensive hysterectomy with precision",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Surgical Care",
      description:
        "We perform meticulous abdominal hysterectomy with or without BSO and adhesiolysis as needed, ensuring complete treatment of your gynaecological condition.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing hysterectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Customized Surgical Approach",
      description:
        "We tailor the surgical procedure to your specific condition — whether you need a simple hysterectomy or require BSO and adhesiolysis.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination and assessment",
    "Ultrasound (pelvic) for uterine assessment",
    "MRI (if needed for complex cases)",
    "Endometrial biopsy (if indicated)",
    "Pap smear and HPV testing",
    "Blood tests including CA-125 (if indicated)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General or spinal anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The uterus is carefully separated from surrounding structures",
    "BSO (removal of fallopian tubes and ovaries) may be performed if indicated",
    "Adhesiolysis (removal of scar tissue) is performed if adhesions are present",
    "The incision is closed with sutures or staples",
    "Procedure typically completed within 1.5-3 hours",
  ],
  postOpDo: [
    "Take prescribed pain relief, antibiotics, and other medications on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow hormonal replacement therapy if BSO was performed",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had large fibroids causing heavy bleeding and pain. The abdominal hysterectomy gave me complete relief. The surgeon was excellent and the recovery was well managed.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I needed a hysterectomy with BSO due to endometriosis. The team was very supportive and explained everything clearly. The 90-day follow-ups gave me peace of mind.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgical care was excellent and I'm recovering well. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is abdominal hysterectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after abdominal hysterectomy?",
      a: "Most patients are discharged within 2-4 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 4-6 weeks.",
    },
    {
      q: "Is abdominal hysterectomy covered by insurance?",
      a: "Yes, abdominal hysterectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between hysterectomy with and without BSO?",
      a: "A hysterectomy without BSO removes only the uterus. A hysterectomy with BSO removes the uterus along with the fallopian tubes and ovaries. BSO is performed for conditions like endometriosis, cancer, or as a prophylactic measure.",
    },
    {
      q: "What is adhesiolysis and why is it needed?",
      a: "Adhesiolysis is the surgical removal of adhesions (scar tissue) that can form from previous surgeries, infections, or conditions like endometriosis. Adhesions can cause pain, bowel obstruction, or infertility, and their removal may be necessary during hysterectomy.",
    },
  ],
  metaTitle: "Abdominal Hysterectomy in Bangalore | With/Without BSO & Adhesiolysis — Doctor247",
  metaDescription:
    "Best abdominal hysterectomy in Bangalore starting at ₹58,500. Expert gynaecological surgery with or without BSO and adhesiolysis, cashless insurance, experienced surgeons.",
  metaKeywords:
    "abdominal hysterectomy in bangalore, hysterectomy cost bangalore, hysterectomy with BSO, adhesiolysis surgery, gynaecological surgery, best gynaecologist bangalore",
},

"hysterectomy-laparoscopic": {
  slug: "hysterectomy-laparoscopic",
  name: "Laparoscopic Hysterectomy (With or Without BSO & Adhesiolysis)",
  shortName: "Laparoscopic Hysterectomy",
  price: "₹83,500",
  heroDescription:
    "Advanced laparoscopic hysterectomy with or without bilateral salpingo-oophorectomy (BSO) and adhesiolysis for gynaecological conditions. Minimally invasive, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "3,000+", label: "Laparoscopic Hysterectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Laparoscopic Hysterectomy?",
  aboutParagraphs: [
    "A laparoscopic hysterectomy is a minimally invasive surgical procedure that involves the removal of the uterus through small incisions in the abdomen using a camera and specialized instruments. It may be performed with or without bilateral salpingo-oophorectomy (BSO) — removal of the fallopian tubes and ovaries. Adhesiolysis (removal of scar tissue) may also be performed if adhesions are present from previous surgeries or conditions.",
    "This advanced technique offers numerous benefits over traditional open surgery including smaller incisions, less pain, faster recovery, and minimal scarring. Doctor247 connects you with experienced gynaecological surgeons for safe, effective laparoscopic hysterectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Hysterectomy?",
      items: [
        "Uterine fibroids causing pain, pressure, or heavy bleeding",
        "Endometriosis not responding to medical management",
        "Uterine prolapse causing discomfort or urinary issues",
        "Gynaecological cancers (uterine, cervical, ovarian)",
        "Abnormal uterine bleeding not controlled with other treatments",
      ],
    },
    {
      label: "Gynaecological Health & Prevention",
      items: [
        "Regular gynaecological check-ups and Pap smears",
        "Maintain a healthy body weight",
        "Monitor and manage abnormal uterine bleeding promptly",
        "Know your family history of gynaecological conditions",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive symptoms of fibroids including heavy bleeding",
        "Chronic pain from endometriosis",
        "Fertility issues and pregnancy complications",
        "Progression of gynaecological cancers",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — minimally invasive with faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in advanced laparoscopic gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Technique",
      description:
        "We use state-of-the-art laparoscopic technology with 3-4 small incisions, providing excellent visualization and precise surgical removal with minimal tissue trauma.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Gynaecological Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing laparoscopic hysterectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Minimal Scarring",
      description:
        "Unlike open surgery, laparoscopic hysterectomy offers significantly faster recovery — most patients return to normal activities within 2-3 weeks with barely visible scars.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination and assessment",
    "Ultrasound (pelvic) for uterine assessment",
    "MRI (if needed for complex cases)",
    "Endometrial biopsy (if indicated)",
    "Pap smear and HPV testing",
    "Blood tests including CA-125 (if indicated)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions are made in the abdomen",
    "Carbon dioxide gas is used to inflate the abdomen for better visualization",
    "A laparoscope (camera) and specialized instruments are inserted",
    "The uterus is carefully separated from surrounding structures",
    "BSO (removal of fallopian tubes and ovaries) may be performed if indicated",
    "Adhesiolysis (removal of scar tissue) is performed if adhesions are present",
    "The uterus is removed through the vagina or morcellated and removed through the incisions",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 2-4 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief, antibiotics, and other medications on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow hormonal replacement therapy if BSO was performed",
  ],
  postOpDont: [
    "Don't lift heavy weights for 3-4 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I chose laparoscopic hysterectomy and I'm so glad I did. The recovery was so much faster than I expected and the scars are barely visible. Excellent care from Doctor247.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and quicker return to normal life. The surgeon was highly skilled and the team was very supportive throughout.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete peace of mind. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic hysterectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic hysterectomy causes significantly less post-operative pain than open surgery due to smaller incisions, with most patients experiencing only mild discomfort.",
    },
    {
      q: "How long does recovery take after laparoscopic hysterectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 2-3 weeks — significantly faster than the 4-6 weeks required for open hysterectomy.",
    },
    {
      q: "Is laparoscopic hysterectomy covered by insurance?",
      a: "Yes, laparoscopic hysterectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the advantage of laparoscopic over abdominal hysterectomy?",
      a: "Laparoscopic hysterectomy offers several advantages: smaller incisions, less post-operative pain, faster recovery, shorter hospital stay, minimal scarring, and earlier return to normal activities.",
    },
    {
      q: "What is the difference between hysterectomy with and without BSO?",
      a: "A hysterectomy without BSO removes only the uterus. A hysterectomy with BSO removes the uterus along with the fallopian tubes and ovaries. BSO is performed for conditions like endometriosis, cancer, or as a prophylactic measure.",
    },
  ],
  metaTitle: "Laparoscopic Hysterectomy in Bangalore | Minimally Invasive Gynaecological Surgery — Doctor247",
  metaDescription:
    "Best laparoscopic hysterectomy in Bangalore starting at ₹83,500. Advanced minimally invasive surgery with or without BSO & adhesiolysis, cashless insurance, expert surgeons.",
  metaKeywords:
    "laparoscopic hysterectomy in bangalore, laparoscopic hysterectomy cost, minimally invasive hysterectomy, gynaecological surgery, best gynaecologist bangalore, hysterectomy with BSO",
},

"hysterectomy-vaginal": {
  slug: "hysterectomy-vaginal",
  name: "Hysterectomy - Vaginal (With or Without Pelvic Floor Repair & Adhesiolysis)",
  shortName: "Vaginal Hysterectomy",
  price: "₹80,000",
  heroDescription:
    "Safe, scarless vaginal hysterectomy with or without pelvic floor repair and adhesiolysis for gynaecological conditions. No abdominal incisions, faster recovery, cashless insurance, no-cost EMI, and free follow-ups. Get advanced gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,500+", label: "Vaginal Hysterectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Vaginal Hysterectomy?",
  aboutParagraphs: [
    "A vaginal hysterectomy is a surgical procedure that involves the removal of the uterus through the vagina without any abdominal incisions. It may be performed with or without pelvic floor repair (to correct prolapse or incontinence) and adhesiolysis (removal of scar tissue). This approach offers the advantage of no visible scarring and faster recovery.",
    "This procedure is commonly performed for conditions such as uterine prolapse, heavy bleeding, fibroids, and endometriosis. Doctor247 connects you with experienced gynaecological surgeons for safe, effective vaginal hysterectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Vaginal Hysterectomy?",
      items: [
        "Uterine prolapse requiring surgical correction",
        "Heavy menstrual bleeding not controlled with other treatments",
        "Small to moderate sized uterine fibroids",
        "Pelvic floor dysfunction with incontinence or prolapse",
        "Endometriosis not responding to medical management",
      ],
    },
    {
      label: "Gynaecological Health & Prevention",
      items: [
        "Regular gynaecological check-ups and Pap smears",
        "Perform pelvic floor exercises (Kegel exercises)",
        "Maintain a healthy body weight",
        "Monitor and manage abnormal uterine bleeding promptly",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive uterine prolapse causing discomfort and incontinence",
        "Chronic pain and heavy bleeding from fibroids or endometriosis",
        "Fertility issues and pregnancy complications",
        "Progression of gynaecological conditions",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Vaginal Surgery — scarless hysterectomy with or without pelvic floor repair",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in vaginal gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Scarless Surgery",
      description:
        "Vaginal hysterectomy is performed entirely through the vagina with no abdominal incisions, resulting in no visible scarring and a more comfortable recovery.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Comprehensive Pelvic Floor Repair",
      description:
        "We perform pelvic floor repair when indicated to correct prolapse, incontinence, and other pelvic floor dysfunctions, restoring pelvic health.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing vaginal hysterectomies with consistently high success rates.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination and assessment of pelvic floor",
    "Ultrasound (pelvic) for uterine assessment",
    "Urodynamic studies (if incontinence is suspected)",
    "Endometrial biopsy (if indicated)",
    "Pap smear and HPV testing",
    "Blood tests to assess fitness for surgery",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General or spinal anaesthesia for a pain-free procedure",
    "An incision is made at the top of the vagina",
    "The uterus is carefully separated from surrounding structures and delivered through the vagina",
    "Pelvic floor repair (if indicated) to correct prolapse or incontinence",
    "Adhesiolysis (removal of scar tissue) is performed if adhesions are present",
    "The vaginal incision is closed with dissolvable sutures",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief, antibiotics, and other medications on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Avoid straining during bowel movements — use stool softeners if needed",
    "Attend your follow-up visit within 7-10 days for assessment",
    "Perform gentle pelvic floor exercises as advised",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 6 weeks",
    "Don't use tampons or douche until cleared by your surgeon",
    "Don't ignore fever, increased pain, heavy bleeding, or unusual discharge — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had a prolapsed uterus and needed a vaginal hysterectomy. The scarless approach meant no visible scars and faster recovery. The pelvic floor repair was excellent too.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“No abdominal incisions meant I was back on my feet quickly. The surgeon was very skilled and explained everything clearly. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“The vaginal hysterectomy with pelvic floor repair solved my prolapse and incontinence issues. The 90-day follow-ups ensured complete healing. Excellent care.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is vaginal hysterectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is generally less than abdominal hysterectomy, with most patients experiencing only mild to moderate discomfort.",
    },
    {
      q: "How long does recovery take after vaginal hysterectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 3-4 weeks.",
    },
    {
      q: "Is vaginal hysterectomy covered by insurance?",
      a: "Yes, vaginal hysterectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What are the advantages of vaginal hysterectomy?",
      a: "Vaginal hysterectomy offers several advantages: no abdominal incisions, no visible scarring, less post-operative pain, shorter hospital stay, faster recovery, and lower risk of wound complications.",
    },
    {
      q: "What is pelvic floor repair and why is it needed?",
      a: "Pelvic floor repair is a procedure that corrects weakness or damage to the pelvic floor muscles and tissues, often done to treat uterine prolapse, cystocele, rectocele, or stress incontinence. It may be performed along with vaginal hysterectomy for complete pelvic health restoration.",
    },
  ],
  metaTitle: "Vaginal Hysterectomy in Bangalore | Scarless Gynaecological Surgery — Doctor247",
  metaDescription:
    "Best vaginal hysterectomy in Bangalore starting at ₹80,000. Scarless surgery with or without pelvic floor repair & adhesiolysis, cashless insurance, expert surgeons.",
  metaKeywords:
    "vaginal hysterectomy in bangalore, vaginal hysterectomy cost, scarless hysterectomy, pelvic floor repair, gynaecological surgery, best gynaecologist bangalore",
},

"hysterectomy-lavh": {
  slug: "hysterectomy-lavh",
  name: "Hysterectomy - LAVH (With or Without Pelvic Floor Repair & Adhesiolysis)",
  shortName: "LAVH Hysterectomy",
  price: "₹65,500",
  heroDescription:
    "Advanced laparoscopic-assisted vaginal hysterectomy (LAVH) with or without pelvic floor repair and adhesiolysis for gynaecological conditions. Combines laparoscopic precision with vaginal delivery, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,800+", label: "LAVH Procedures Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is LAVH?",
  aboutParagraphs: [
    "LAVH (Laparoscopic-Assisted Vaginal Hysterectomy) is a minimally invasive surgical procedure that combines laparoscopic and vaginal techniques for the removal of the uterus. The laparoscopic portion provides visualization and mobilization of the uterus and surrounding structures, while the vaginal portion allows for the extraction of the uterus. It may be performed with or without pelvic floor repair (to correct prolapse or incontinence) and adhesiolysis (removal of scar tissue).",
    "This approach offers the benefits of both laparoscopic and vaginal hysterectomy — less pain, faster recovery, and minimal scarring — while allowing for the removal of larger uteri than vaginal hysterectomy alone. Doctor247 connects you with experienced gynaecological surgeons for safe, effective LAVH in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose LAVH?",
      items: [
        "Uterine fibroids causing pain, pressure, or heavy bleeding",
        "Endometriosis not responding to medical management",
        "Uterine prolapse with or without pelvic floor dysfunction",
        "Abnormal uterine bleeding not controlled with other treatments",
        "Larger uterus that may not be suitable for vaginal hysterectomy alone",
      ],
    },
    {
      label: "Gynaecological Health & Prevention",
      items: [
        "Regular gynaecological check-ups and Pap smears",
        "Perform pelvic floor exercises (Kegel exercises)",
        "Maintain a healthy body weight",
        "Monitor and manage abnormal uterine bleeding promptly",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive symptoms of fibroids including heavy bleeding",
        "Chronic pain from endometriosis",
        "Progressive uterine prolapse causing discomfort and incontinence",
        "Progression of gynaecological conditions",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced LAVH Technique — combined laparoscopic and vaginal approach for optimal outcomes",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in advanced gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Combined Laparoscopic & Vaginal Approach",
      description:
        "LAVH combines the precision of laparoscopic visualization with the vaginal extraction of the uterus, offering the best of both techniques for optimal surgical outcomes.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Comprehensive Pelvic Floor Repair",
      description:
        "We perform pelvic floor repair when indicated to correct prolapse, incontinence, and other pelvic floor dysfunctions, restoring pelvic health.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing LAVH procedures with consistently high success rates.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination and assessment of pelvic floor",
    "Ultrasound (pelvic) for uterine assessment",
    "MRI (if needed for complex cases)",
    "Urodynamic studies (if incontinence is suspected)",
    "Endometrial biopsy (if indicated)",
    "Pap smear and HPV testing",
    "Blood tests to assess fitness for surgery",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "2-4 small keyhole incisions are made in the abdomen",
    "A laparoscope (camera) and specialized instruments are inserted",
    "The uterus is mobilized and prepared for removal laparoscopically",
    "The vaginal component is performed to extract the uterus",
    "Pelvic floor repair (if indicated) to correct prolapse or incontinence",
    "Adhesiolysis (removal of scar tissue) is performed if adhesions are present",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief, antibiotics, and other medications on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Avoid straining during bowel movements — use stool softeners if needed",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Perform gentle pelvic floor exercises as advised",
  ],
  postOpDont: [
    "Don't lift heavy weights for 3-4 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't drive or operate machinery until your surgeon clears you",
    "Don't use tampons or douche until cleared by your surgeon",
    "Don't ignore fever, increased pain, heavy bleeding, or unusual discharge — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had a large fibroid and needed a hysterectomy. LAVH gave me the best of both worlds — laparoscopic precision and vaginal delivery. Recovery was much faster than I expected.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The LAVH procedure was explained clearly. The combination of techniques meant less pain and minimal scarring. The pelvic floor repair was an added bonus. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete confidence. Excellent care from the team.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is LAVH painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. LAVH causes significantly less post-operative pain than abdominal hysterectomy due to smaller incisions.",
    },
    {
      q: "How long does recovery take after LAVH?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 2-3 weeks.",
    },
    {
      q: "Is LAVH covered by insurance?",
      a: "Yes, LAVH is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between LAVH and other hysterectomy types?",
      a: "LAVH combines laparoscopic visualization with vaginal extraction. It offers advantages over vaginal hysterectomy for larger uteri and advantages over laparoscopic hysterectomy by avoiding morcellation. It's a hybrid approach offering flexibility.",
    },
    {
      q: "What is pelvic floor repair and why is it needed?",
      a: "Pelvic floor repair is a procedure that corrects weakness or damage to the pelvic floor muscles and tissues, often done to treat uterine prolapse, cystocele, rectocele, or stress incontinence. It may be performed along with LAVH for complete pelvic health restoration.",
    },
  ],
  metaTitle: "LAVH Hysterectomy in Bangalore | Laparoscopic-Assisted Vaginal Hysterectomy — Doctor247",
  metaDescription:
    "Best LAVH in Bangalore starting at ₹65,500. Laparoscopic-assisted vaginal hysterectomy with pelvic floor repair & adhesiolysis, cashless insurance, expert surgeons.",
  metaKeywords:
    "LAVH in bangalore, LAVH hysterectomy cost, laparoscopic assisted vaginal hysterectomy, pelvic floor repair, gynaecological surgery, best gynaecologist bangalore",
},

"dandc-hysteroscopy": {
  slug: "dandc-hysteroscopy",
  name: "D & C with Hysteroscopy (Day Care)",
  shortName: "D&C with Hysteroscopy",
  price: "₹37,500",
  heroDescription:
    "Safe, effective Dilation & Curettage (D&C) with hysteroscopy for diagnostic and therapeutic gynaecological procedures. Day care procedure with expert care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced gynaecological care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "6,000+", label: "D&C with Hysteroscopy Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is D & C with Hysteroscopy?",
  aboutParagraphs: [
    "D&C (Dilation and Curettage) with hysteroscopy is a gynaecological procedure that involves dilating the cervix and scraping or suctioning the lining of the uterus (endometrium) while visualizing the uterine cavity with a hysteroscope (a thin, lighted camera). This procedure is performed for both diagnostic and therapeutic purposes.",
    "Hysteroscopy provides direct visualization of the uterine cavity, allowing the surgeon to identify and treat abnormalities such as polyps, fibroids, and adhesions. D&C allows for sampling of the endometrial tissue for pathological examination. Doctor247 connects you with experienced gynaecological surgeons for safe, effective D&C with hysteroscopy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose D & C with Hysteroscopy?",
      items: [
        "Abnormal uterine bleeding requiring investigation",
        "Post-menopausal bleeding",
        "Suspected endometrial polyps or fibroids",
        "Infertility evaluation",
        "Retained products of conception after miscarriage",
        "Endometrial biopsy for cancer screening",
      ],
    },
    {
      label: "Gynaecological Health & Prevention",
      items: [
        "Regular gynaecological check-ups and Pap smears",
        "Monitor and report abnormal bleeding promptly",
        "Maintain a healthy body weight",
        "Know your family history of gynaecological conditions",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Undiagnosed endometrial pathology including cancer",
        "Progressive symptoms of polyps or fibroids",
        "Chronic abnormal bleeding leading to anaemia",
        "Fertility issues from undiagnosed uterine abnormalities",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert D&C with Hysteroscopy — precise diagnostic and therapeutic procedure",
        "Free Follow-ups — post-procedure consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in gynaecological procedures",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Diagnostic & Therapeutic Procedure",
      description:
        "We perform meticulous D&C with hysteroscopy, providing direct visualization of the uterine cavity for accurate diagnosis and targeted treatment of abnormalities.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing D&C with hysteroscopy with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Day Care Procedure",
      description:
        "D&C with hysteroscopy is a day care procedure — you can go home the same day and resume normal activities within 1-2 days.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination",
    "Ultrasound (pelvic) for uterine assessment",
    "Pregnancy test (if indicated)",
    "Blood tests including complete blood count (CBC)",
    "Coagulation profile (if indicated)",
    "ECG and fitness assessment (if needed)",
  ],
  procedureSteps: [
    "General or local anaesthesia depending on the case",
    "The cervix is gently dilated to allow access to the uterus",
    "A hysteroscope (camera) is inserted to visualize the uterine cavity",
    "Polyps, fibroids, or adhesions are identified and may be removed",
    "A curette is used to scrape or suction the endometrial lining",
    "Tissue samples are sent for pathological examination",
    "Procedure typically completed within 15-30 minutes",
  ],
  postOpDo: [
    "Rest for the remainder of the day after the procedure",
    "Take prescribed pain relief and antibiotics on schedule",
    "Use sanitary pads for vaginal bleeding (do not use tampons)",
    "Attend your follow-up visit for histopathology results and assessment",
  ],
  postOpDont: [
    "Don't engage in sexual intercourse for at least 2 weeks",
    "Don't use tampons or douche for 2 weeks",
    "Don't lift heavy weights for 1 week",
    "Don't ignore fever, heavy bleeding, or severe pain — call us immediately",
  ],
  testimonials: [
    {
      quote:
        "“I had abnormal bleeding and the D&C with hysteroscopy provided a clear diagnosis. The procedure was quick, I went home the same day, and the results gave me peace of mind.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The hysteroscopy allowed the doctor to see exactly what was wrong and remove a polyp during the same procedure. Excellent care and very professional.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I was nervous but the team made me feel comfortable. The procedure was painless under anaesthesia and recovery was quick. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is D&C with hysteroscopy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during the procedure. Post-operative cramping is common but manageable with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after D&C with hysteroscopy?",
      a: "Most patients return to normal activities within 1-2 days. You may experience mild cramping and bleeding for a few days, which is normal.",
    },
    {
      q: "Is D&C with hysteroscopy covered by insurance?",
      a: "Yes, D&C with hysteroscopy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between D&C alone and D&C with hysteroscopy?",
      a: "D&C alone is a 'blind' procedure where the surgeon scrapes the uterine lining without visualization. D&C with hysteroscopy allows direct visualization of the uterine cavity, enabling the surgeon to see and treat specific abnormalities like polyps or fibroids.",
    },
    {
      q: "How long does it take to get pathology results?",
      a: "Histopathology results typically take 5-10 working days. Your surgeon will inform you of the results during your follow-up visit.",
    },
  ],
  metaTitle: "D&C with Hysteroscopy in Bangalore | Day Care Gynaecological Procedure — Doctor247",
  metaDescription:
    "Best D&C with hysteroscopy in Bangalore starting at ₹37,500. Expert diagnostic and therapeutic procedure, day care, cashless insurance, experienced gynaecological surgeons.",
  metaKeywords:
    "D and C with hysteroscopy in bangalore, hysteroscopy cost, endometrial biopsy, abnormal uterine bleeding treatment, gynaecological procedure, best gynaecologist bangalore",
},

"open-ruptured-ectopic-pregnancy": {
  slug: "open-ruptured-ectopic-pregnancy",
  name: "Open - Ruptured Ectopic Pregnancy",
  shortName: "Ruptured Ectopic Surgery",
  price: "₹70,500",
  heroDescription:
    "Emergency open surgery for ruptured ectopic pregnancy with expert surgical care, blood transfusion support, cashless insurance, and free follow-ups. Get life-saving gynaecological emergency care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "1,500+", label: "Ectopic Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Ruptured Ectopic Pregnancy?",
  aboutParagraphs: [
    "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, most commonly in the fallopian tube. When the pregnancy grows and ruptures the tube, it causes life-threatening internal bleeding. This is a surgical emergency requiring immediate intervention to save the patient's life.",
    "Open surgery for ruptured ectopic pregnancy involves making an abdominal incision to access the site of rupture, control bleeding, and remove the ectopic pregnancy. Doctor247 provides emergency surgical care by experienced gynaecological surgeons for ruptured ectopic pregnancies in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Emergency Ectopic Surgery?",
      items: [
        "Sudden, severe abdominal pain in early pregnancy",
        "Vaginal bleeding with signs of haemorrhage",
        "Fainting or dizziness suggesting significant blood loss",
        "Positive pregnancy test with ultrasound showing free fluid in the abdomen",
      ],
    },
    {
      label: "Recognizing Ectopic Pregnancy Symptoms",
      items: [
        "Missed period with unusual spotting or bleeding",
        "Sharp, stabbing abdominal pain, often on one side",
        "Pain that worsens with movement or exertion",
        "Signs of shock: dizziness, fainting, rapid heartbeat",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Life-threatening haemorrhage from ruptured tube",
        "Hypovolemic shock and organ failure",
        "Loss of fertility on the affected side",
        "Maternal mortality in severe untreated cases",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Emergency Surgical Care — 24/7 availability for life-saving procedures",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in emergency gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Emergency Life-Saving Care",
      description:
        "We provide immediate emergency surgical intervention for ruptured ectopic pregnancies with rapid diagnosis, blood transfusion support, and expert surgical care.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Emergency Surgeons",
      description:
        "Every Doctor247 surgeon has extensive experience managing gynaecological emergencies, including ruptured ectopic pregnancies with high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Blood Transfusion & Critical Care Support",
      description:
        "We provide comprehensive blood transfusion support, fluid resuscitation, and critical care management for patients presenting with significant blood loss.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Urine pregnancy test (positive)",
    "Serum beta-hCG levels (abnormal rise)",
    "Transvaginal ultrasound (empty uterus, adnexal mass)",
    "Culdocentesis (blood in the pouch of Douglas)",
    "Complete blood count (CBC) to assess blood loss",
    "Blood grouping and cross-matching for transfusion",
    "Coagulation profile",
  ],
  procedureSteps: [
    "Emergency assessment and preparation for surgery",
    "General anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The abdomen is explored to identify the site of rupture",
    "The ruptured tube is identified and bleeding is controlled",
    "The ectopic pregnancy is removed (salpingectomy or salpingotomy)",
    "The peritoneal cavity is washed and inspected for continued bleeding",
    "The incision is closed with sutures or staples",
    "Procedure typically completed within 1-2 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Follow blood transfusion and iron supplementation as advised",
    "Walk short distances from day 1 to aid circulation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up beta-hCG monitoring appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a ruptured ectopic pregnancy and was rushed to emergency. The Doctor247 team saved my life with immediate surgery. I'm forever grateful for their quick action and expert care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The emergency care was exceptional. The surgeon was highly skilled and the blood transfusion support was critical. The 90-day follow-ups gave me peace of mind.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I was terrified when I was diagnosed with a ruptured ectopic pregnancy. The team acted quickly, explained everything, and provided excellent post-operative care.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is surgery for ruptured ectopic pregnancy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication.",
    },
    {
      q: "How long does recovery take after open ectopic surgery?",
      a: "Most patients are discharged within 2-4 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 4-6 weeks.",
    },
    {
      q: "Is surgery for ruptured ectopic pregnancy covered by insurance?",
      a: "Yes, emergency surgery for ruptured ectopic pregnancy is covered by most health insurance plans in India as a medical emergency. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will I be able to conceive after a ruptured ectopic pregnancy?",
      a: "Yes, most women can conceive after recovering from surgery. However, if the affected tube was removed, fertility may be reduced. The remaining tube functions normally and pregnancy is still possible.",
    },
    {
      q: "What is the difference between salpingectomy and salpingotomy?",
      a: "Salpingectomy is the removal of the entire fallopian tube containing the ectopic pregnancy. Salpingotomy is the removal of the ectopic pregnancy while preserving the tube. The choice depends on the condition of the tube, extent of rupture, and patient preference for future fertility.",
    },
  ],
  metaTitle: "Ruptured Ectopic Pregnancy Surgery in Bangalore | Emergency Gynaecological Care — Doctor247",
  metaDescription:
    "Best emergency surgery for ruptured ectopic pregnancy in Bangalore starting at ₹70,500. Expert life-saving care, blood transfusion support, cashless insurance.",
  metaKeywords:
    "ruptured ectopic pregnancy surgery bangalore, ectopic pregnancy emergency treatment, open ectopic surgery, gynaecological emergency, best gynaecologist bangalore, ectopic pregnancy surgery cost",
},

"open-ruptured-ectopic-pregnancy": {
  slug: "open-ruptured-ectopic-pregnancy",
  name: "Open - Ruptured Ectopic Pregnancy",
  shortName: "Ruptured Ectopic Surgery",
  price: "₹70,500",
  heroDescription:
    "Emergency open surgery for ruptured ectopic pregnancy with expert surgical care, blood transfusion support, cashless insurance, no-cost EMI, and free follow-ups. Get life-saving gynaecological emergency care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "1,500+", label: "Ectopic Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Ruptured Ectopic Pregnancy?",
  aboutParagraphs: [
    "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, most commonly in the fallopian tube. When the pregnancy grows and ruptures the tube, it causes life-threatening internal bleeding. This is a surgical emergency requiring immediate intervention to save the patient's life.",
    "Open surgery for ruptured ectopic pregnancy involves making an abdominal incision to access the site of rupture, control bleeding, and remove the ectopic pregnancy. Doctor247 provides emergency surgical care by experienced gynaecological surgeons for ruptured ectopic pregnancies in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Emergency Ectopic Surgery?",
      items: [
        "Sudden, severe abdominal pain in early pregnancy",
        "Vaginal bleeding with signs of haemorrhage",
        "Fainting or dizziness suggesting significant blood loss",
        "Positive pregnancy test with ultrasound showing free fluid in the abdomen",
      ],
    },
    {
      label: "Recognizing Ectopic Pregnancy Symptoms",
      items: [
        "Missed period with unusual spotting or bleeding",
        "Sharp, stabbing abdominal pain, often on one side",
        "Pain that worsens with movement or exertion",
        "Signs of shock: dizziness, fainting, rapid heartbeat",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Life-threatening haemorrhage from ruptured tube",
        "Hypovolemic shock and organ failure",
        "Loss of fertility on the affected side",
        "Maternal mortality in severe untreated cases",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Emergency Surgical Care — 24/7 availability for life-saving procedures",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in emergency gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Emergency Life-Saving Care",
      description:
        "We provide immediate emergency surgical intervention for ruptured ectopic pregnancies with rapid diagnosis, blood transfusion support, and expert surgical care.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Emergency Surgeons",
      description:
        "Every Doctor247 surgeon has extensive experience managing gynaecological emergencies, including ruptured ectopic pregnancies with high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Blood Transfusion & Critical Care Support",
      description:
        "We provide comprehensive blood transfusion support, fluid resuscitation, and critical care management for patients presenting with significant blood loss.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Urine pregnancy test (positive)",
    "Serum beta-hCG levels (abnormal rise)",
    "Transvaginal ultrasound (empty uterus, adnexal mass)",
    "Culdocentesis (blood in the pouch of Douglas)",
    "Complete blood count (CBC) to assess blood loss",
    "Blood grouping and cross-matching for transfusion",
    "Coagulation profile",
  ],
  procedureSteps: [
    "Emergency assessment and preparation for surgery",
    "General anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The abdomen is explored to identify the site of rupture",
    "The ruptured tube is identified and bleeding is controlled",
    "The ectopic pregnancy is removed (salpingectomy or salpingotomy)",
    "The peritoneal cavity is washed and inspected for continued bleeding",
    "The incision is closed with sutures or staples",
    "Procedure typically completed within 1-2 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Follow blood transfusion and iron supplementation as advised",
    "Walk short distances from day 1 to aid circulation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up beta-hCG monitoring appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a ruptured ectopic pregnancy and was rushed to emergency. The Doctor247 team saved my life with immediate surgery. I'm forever grateful for their quick action and expert care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The emergency care was exceptional. The surgeon was highly skilled and the blood transfusion support was critical. The 90-day follow-ups gave me peace of mind.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I was terrified when I was diagnosed with a ruptured ectopic pregnancy. The team acted quickly, explained everything, and provided excellent post-operative care.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is surgery for ruptured ectopic pregnancy painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication.",
    },
    {
      q: "How long does recovery take after open ectopic surgery?",
      a: "Most patients are discharged within 2-4 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 4-6 weeks.",
    },
    {
      q: "Is surgery for ruptured ectopic pregnancy covered by insurance?",
      a: "Yes, emergency surgery for ruptured ectopic pregnancy is covered by most health insurance plans in India as a medical emergency. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will I be able to conceive after a ruptured ectopic pregnancy?",
      a: "Yes, most women can conceive after recovering from surgery. However, if the affected tube was removed, fertility may be reduced. The remaining tube functions normally and pregnancy is still possible.",
    },
    {
      q: "What is the difference between salpingectomy and salpingotomy?",
      a: "Salpingectomy is the removal of the entire fallopian tube containing the ectopic pregnancy. Salpingotomy is the removal of the ectopic pregnancy while preserving the tube. The choice depends on the condition of the tube, extent of rupture, and patient preference for future fertility.",
    },
  ],
  metaTitle: "Ruptured Ectopic Pregnancy Surgery in Bangalore | Emergency Gynaecological Care — Doctor247",
  metaDescription:
    "Best emergency surgery for ruptured ectopic pregnancy in Bangalore starting at ₹70,500. Expert life-saving care, blood transfusion support, cashless insurance, expert surgeons.",
  metaKeywords:
    "ruptured ectopic pregnancy surgery bangalore, ectopic pregnancy emergency treatment, open ectopic surgery, gynaecological emergency, best gynaecologist bangalore, ectopic pregnancy surgery cost",
},

"laparoscopic-ruptured-ectopic-pregnancy": {
  slug: "laparoscopic-ruptured-ectopic-pregnancy",
  name: "Laparoscopic - Ruptured Ectopic Pregnancy",
  shortName: "Laparoscopic Ectopic Surgery",
  price: "₹62,500",
  heroDescription:
    "Advanced laparoscopic surgery for ruptured ectopic pregnancy with tiny incisions, faster recovery, minimal scarring, blood transfusion support, cashless insurance, no-cost EMI, and free follow-ups. Get life-saving gynaecological emergency care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "2,000+", label: "Laparoscopic Ectopic Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Ruptured Ectopic Pregnancy?",
  aboutParagraphs: [
    "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, most commonly in the fallopian tube. When the pregnancy grows and ruptures the tube, it causes life-threatening internal bleeding. This is a surgical emergency requiring immediate intervention to save the patient's life.",
    "Laparoscopic surgery for ruptured ectopic pregnancy is a minimally invasive approach using small incisions, a camera, and specialized instruments to access the site of rupture, control bleeding, and remove the ectopic pregnancy. This technique offers faster recovery, less pain, and minimal scarring compared to open surgery. Doctor247 provides emergency laparoscopic surgical care by experienced gynaecological surgeons for ruptured ectopic pregnancies in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Ectopic Surgery?",
      items: [
        "Sudden, severe abdominal pain in early pregnancy",
        "Vaginal bleeding with signs of haemorrhage",
        "Fainting or dizziness suggesting significant blood loss",
        "Positive pregnancy test with ultrasound showing free fluid in the abdomen",
        "Haemodynamically stable patient suitable for laparoscopic approach",
      ],
    },
    {
      label: "Recognizing Ectopic Pregnancy Symptoms",
      items: [
        "Missed period with unusual spotting or bleeding",
        "Sharp, stabbing abdominal pain, often on one side",
        "Pain that worsens with movement or exertion",
        "Signs of shock: dizziness, fainting, rapid heartbeat",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Life-threatening haemorrhage from ruptured tube",
        "Hypovolemic shock and organ failure",
        "Loss of fertility on the affected side",
        "Maternal mortality in severe untreated cases",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Emergency Care — minimally invasive life-saving surgery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in emergency laparoscopic gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Minimally Invasive Life-Saving Care",
      description:
        "We perform emergency laparoscopic surgery for ruptured ectopic pregnancies with small incisions, providing life-saving intervention while minimizing trauma and promoting faster recovery.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has extensive experience performing emergency laparoscopic procedures for ectopic pregnancies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Minimal Scarring",
      description:
        "Laparoscopic approach offers significantly faster recovery, less post-operative pain, shorter hospital stay, and minimal scarring compared to open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Urine pregnancy test (positive)",
    "Serum beta-hCG levels (abnormal rise)",
    "Transvaginal ultrasound (empty uterus, adnexal mass)",
    "Culdocentesis (blood in the pouch of Douglas)",
    "Complete blood count (CBC) to assess blood loss",
    "Blood grouping and cross-matching for transfusion",
    "Coagulation profile",
  ],
  procedureSteps: [
    "Emergency assessment and preparation for surgery",
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions are made in the abdomen",
    "Carbon dioxide gas is used to inflate the abdomen for better visualization",
    "A laparoscope (camera) and specialized instruments are inserted",
    "The abdomen is explored to identify the site of rupture",
    "The ruptured tube is identified and bleeding is controlled",
    "The ectopic pregnancy is removed (salpingectomy or salpingotomy)",
    "The peritoneal cavity is washed and inspected for continued bleeding",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 45-90 minutes depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Follow blood transfusion and iron supplementation as advised",
    "Walk short distances from day 1 to aid circulation",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift heavy weights for 2-3 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up beta-hCG monitoring appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a ruptured ectopic pregnancy and the laparoscopic surgery saved my life. The recovery was so much faster than I expected and the scars are barely visible. Grateful to the Doctor247 team.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and quicker recovery. The surgeon was highly skilled and the emergency care was exceptional. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“I was terrified but the team acted quickly and explained everything. The minimal scarring was a bonus. Excellent care and 90-day follow-ups.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic surgery for ruptured ectopic pregnancy safe?",
      a: "Yes, laparoscopic surgery is safe and effective for ruptured ectopic pregnancies in haemodynamically stable patients. It offers the benefits of minimally invasive surgery with excellent outcomes.",
    },
    {
      q: "How long does recovery take after laparoscopic ectopic surgery?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1 week, and full recovery typically takes 2-3 weeks.",
    },
    {
      q: "Is laparoscopic ectopic surgery covered by insurance?",
      a: "Yes, emergency laparoscopic surgery for ruptured ectopic pregnancy is covered by most health insurance plans in India as a medical emergency. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What are the advantages of laparoscopic over open surgery for ectopic pregnancy?",
      a: "Laparoscopic surgery offers several advantages: smaller incisions, less post-operative pain, faster recovery, shorter hospital stay, minimal scarring, and earlier return to normal activities.",
    },
    {
      q: "Who is not suitable for laparoscopic ectopic surgery?",
      a: "Laparoscopic approach may not be suitable for patients who are haemodynamically unstable with massive haemorrhage, have severe adhesions, or have very advanced ectopic pregnancies. Your surgeon will determine the safest approach based on your condition.",
    },
  ],
  metaTitle: "Laparoscopic Ruptured Ectopic Pregnancy Surgery in Bangalore | Emergency Gynaecological Care — Doctor247",
  metaDescription:
    "Best laparoscopic ruptured ectopic pregnancy surgery in Bangalore starting at ₹62,500. Advanced minimally invasive emergency care, cashless insurance, expert surgeons.",
  metaKeywords:
    "laparoscopic ectopic pregnancy surgery bangalore, ruptured ectopic treatment, emergency gynaecological surgery, minimally invasive ectopic surgery, best gynaecologist bangalore",
},

"open-wertheims-node-dissection": {
  slug: "open-wertheims-node-dissection",
  name: "Open - Wertheim's Hysterectomy with Node Dissection",
  shortName: "Wertheim's Surgery",
  price: "₹52,000",
  heroDescription:
    "Comprehensive open Wertheim's hysterectomy with pelvic and para-aortic lymph node dissection for gynaecological cancers. Expert surgical oncology care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced cancer surgery by verified surgical oncologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "1,200+", label: "Wertheim's Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Wertheim's Hysterectomy?",
  aboutParagraphs: [
    "Wertheim's hysterectomy (also known as radical hysterectomy or Type III hysterectomy) is a comprehensive surgical procedure for the treatment of early-stage cervical cancer and other gynaecological cancers. It involves the removal of the uterus, cervix, parametrial tissues, upper vagina, and pelvic lymph nodes.",
    "This extensive surgery provides complete cancer clearance while preserving the ovaries in younger patients when oncologically safe. Doctor247 connects you with experienced surgical oncologists for safe, effective Wertheim's surgery with node dissection in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Wertheim's Surgery?",
      items: [
        "Early-stage cervical cancer (Stage IA2, IB, and selected IIA)",
        "Endometrial cancer with high-risk features",
        "Selected cases of ovarian cancer",
        "Patients suitable for radical surgical resection",
      ],
    },
    {
      label: "Gynaecological Cancer Prevention & Screening",
      items: [
        "Regular Pap smears and HPV testing for cervical cancer screening",
        "HPV vaccination for prevention",
        "Report abnormal bleeding or post-coital bleeding promptly",
        "Know your family history of gynaecological cancers",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive cancer growth with local invasion",
        "Lymph node metastasis and distant spread",
        "Reduced survival rates",
        "Limited treatment options at advanced stages",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Surgical Oncology — comprehensive Wertheim's surgery with complete lymph node dissection",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgical Oncologists — every surgeon is credential-checked with extensive experience in radical gynaecological cancer surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Cancer Surgery",
      description:
        "We perform meticulous Wertheim's hysterectomy with systematic pelvic and para-aortic lymph node dissection, ensuring complete cancer clearance and accurate staging.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Surgical Oncologists",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing radical gynaecological cancer surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Ovarian Preservation When Possible",
      description:
        "In younger patients, we preserve the ovaries when oncologically safe, helping maintain hormonal function and quality of life after surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pap smear and HPV testing",
    "Colposcopy with biopsy for cervical lesions",
    "Endometrial biopsy (if indicated)",
    "MRI pelvis for local staging",
    "CT scan or PET-CT for distant staging",
    "Chest X-ray and liver function tests",
    "Blood tests including tumour markers (SCC, CA-125)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The abdomen is explored for any signs of spread",
    "The uterus, cervix, parametrial tissues, and upper vagina are carefully dissected and removed",
    "Pelvic and para-aortic lymph nodes are systematically dissected",
    "The ovaries may be preserved in younger patients or removed in others",
    "The vaginal cuff is closed and the incision is closed with sutures/staples",
    "Procedure typically completed within 3-5 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow adjuvant treatment (chemotherapy/radiotherapy) as advised",
  ],
  postOpDont: [
    "Don't lift heavy weights for 6-8 weeks",
    "Don't engage in sexual intercourse for at least 6-8 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
    "Don't skip your adjuvant therapy appointments or follow-up surveillance",
  ],
  testimonials: [
    {
      quote:
        "“I was diagnosed with cervical cancer and underwent Wertheim's surgery. The surgeon was highly skilled and the node dissection gave us clear staging information. I'm now cancer-free and recovering well.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The comprehensive cancer care at Doctor247 was exceptional. The Wertheim's surgery was performed with great precision and the 90-day follow-ups were thorough.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgical oncology team was excellent and the recovery care was well managed. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is Wertheim's surgery painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after Wertheim's surgery?",
      a: "Most patients are discharged within 3-5 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 6-8 weeks.",
    },
    {
      q: "Is Wertheim's surgery covered by insurance?",
      a: "Yes, Wertheim's surgery is covered by most health insurance plans in India for cervical and gynaecological cancers. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the purpose of lymph node dissection in Wertheim's surgery?",
      a: "Lymph node dissection (pelvic and para-aortic) provides accurate cancer staging, helps determine the need for adjuvant treatment, and removes microscopic cancer spread, improving survival outcomes.",
    },
    {
      q: "Will I be able to have children after Wertheim's surgery?",
      a: "Wertheim's surgery removes the uterus and cervix, making future pregnancy impossible. Fertility preservation options like egg freezing may be discussed before surgery in early-stage, selected cases.",
    },
  ],
  metaTitle: "Wertheim's Hysterectomy with Node Dissection in Bangalore | Gynaecological Cancer Surgery — Doctor247",
  metaDescription:
    "Best Wertheim's surgery in Bangalore starting at ₹52,000. Expert radical hysterectomy with pelvic & para-aortic node dissection, cashless insurance, experienced surgical oncologists.",
  metaKeywords:
    "wertheims surgery in bangalore, wertheims hysterectomy cost, radical hysterectomy with node dissection, cervical cancer surgery, gynaecological oncology, best surgical oncologist bangalore",
},

"laparoscopic-wertheims-node-dissection": {
  slug: "laparoscopic-wertheims-node-dissection",
  name: "Laparoscopic - Wertheim's Hysterectomy with Node Dissection",
  shortName: "Laparoscopic Wertheim's Surgery",
  price: "₹64,500",
  heroDescription:
    "Advanced laparoscopic Wertheim's hysterectomy with pelvic and para-aortic lymph node dissection for gynaecological cancers. Minimally invasive, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art cancer surgery by verified surgical oncologists in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "1,000+", label: "Laparoscopic Wertheim's Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Laparoscopic Wertheim's Hysterectomy?",
  aboutParagraphs: [
    "Laparoscopic Wertheim's hysterectomy (also known as laparoscopic radical hysterectomy or Type III hysterectomy) is a minimally invasive surgical procedure for the treatment of early-stage cervical cancer and other gynaecological cancers. It involves the removal of the uterus, cervix, parametrial tissues, upper vagina, and pelvic and para-aortic lymph nodes using laparoscopic techniques.",
    "This advanced approach offers the same comprehensive cancer clearance as open surgery with the added benefits of smaller incisions, less pain, faster recovery, and minimal scarring. Doctor247 connects you with experienced surgical oncologists for safe, effective laparoscopic Wertheim's surgery with node dissection in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Wertheim's Surgery?",
      items: [
        "Early-stage cervical cancer (Stage IA2, IB, and selected IIA)",
        "Endometrial cancer with high-risk features",
        "Selected cases of ovarian cancer",
        "Patients suitable for minimally invasive radical surgery",
      ],
    },
    {
      label: "Gynaecological Cancer Prevention & Screening",
      items: [
        "Regular Pap smears and HPV testing for cervical cancer screening",
        "HPV vaccination for prevention",
        "Report abnormal bleeding or post-coital bleeding promptly",
        "Know your family history of gynaecological cancers",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Progressive cancer growth with local invasion",
        "Lymph node metastasis and distant spread",
        "Reduced survival rates",
        "Limited treatment options at advanced stages",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — minimally invasive cancer surgery with precision",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgical Oncologists — every surgeon is credential-checked with extensive experience in advanced laparoscopic cancer surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Cancer Surgery",
      description:
        "We perform meticulous laparoscopic Wertheim's hysterectomy with systematic pelvic and para-aortic lymph node dissection, ensuring complete cancer clearance with minimally invasive precision.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Laparoscopic Surgical Oncologists",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing advanced laparoscopic gynaecological cancer surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Minimal Scarring",
      description:
        "Laparoscopic approach offers significantly faster recovery, less post-operative pain, shorter hospital stay, and minimal scarring compared to open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pap smear and HPV testing",
    "Colposcopy with biopsy for cervical lesions",
    "Endometrial biopsy (if indicated)",
    "MRI pelvis for local staging",
    "CT scan or PET-CT for distant staging",
    "Chest X-ray and liver function tests",
    "Blood tests including tumour markers (SCC, CA-125)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "4-5 small keyhole incisions are made in the abdomen",
    "Carbon dioxide gas is used to inflate the abdomen for better visualization",
    "A laparoscope (camera) and specialized instruments are inserted",
    "The uterus, cervix, parametrial tissues, and upper vagina are carefully dissected and removed laparoscopically",
    "Pelvic and para-aortic lymph nodes are systematically dissected",
    "The ovaries may be preserved in younger patients or removed in others",
    "The vaginal cuff is closed laparoscopically",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 3-5 hours depending on complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow adjuvant treatment (chemotherapy/radiotherapy) as advised",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 6-8 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
    "Don't skip your adjuvant therapy appointments or follow-up surveillance",
  ],
  testimonials: [
    {
      quote:
        "“I was diagnosed with cervical cancer and the laparoscopic Wertheim's surgery was a game-changer. Minimal pain, faster recovery, and I'm now cancer-free. The surgeon was exceptional.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant I was back on my feet much faster than expected. The node dissection was thorough and the staging was precise. Excellent cancer care.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgical oncology team was highly skilled and the 90-day follow-ups were thorough. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic Wertheim's surgery safe?",
      a: "Yes, laparoscopic Wertheim's surgery is safe and effective when performed by experienced surgical oncologists. It offers comparable cancer outcomes to open surgery with the benefits of minimally invasive techniques.",
    },
    {
      q: "How long does recovery take after laparoscopic Wertheim's surgery?",
      a: "Most patients are discharged within 2-3 days. Light activities can be resumed in 1-2 weeks, and full recovery typically takes 4-6 weeks.",
    },
    {
      q: "Is laparoscopic Wertheim's surgery covered by insurance?",
      a: "Yes, laparoscopic Wertheim's surgery is covered by most health insurance plans in India for cervical and gynaecological cancers. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What are the advantages of laparoscopic over open Wertheim's surgery?",
      a: "Laparoscopic approach offers several advantages: smaller incisions, less post-operative pain, faster recovery, shorter hospital stay, minimal scarring, and earlier return to normal activities.",
    },
    {
      q: "Who is not suitable for laparoscopic Wertheim's surgery?",
      a: "Laparoscopic approach may not be suitable for patients with very large tumors, extensive adhesions, or those who are haemodynamically unstable. Your surgeon will determine the safest approach based on your condition.",
    },
  ],
  metaTitle: "Laparoscopic Wertheim's Hysterectomy in Bangalore | Advanced Gynaecological Cancer Surgery — Doctor247",
  metaDescription:
    "Best laparoscopic Wertheim's surgery in Bangalore starting at ₹64,500. Advanced minimally invasive cancer surgery with node dissection, cashless insurance, expert surgical oncologists.",
  metaKeywords:
    "laparoscopic wertheims surgery bangalore, radical hysterectomy laparoscopic, cervical cancer surgery, gynaecological oncology, best surgical oncologist bangalore, wertheims hysterectomy cost",
},

"open-myomectomy": {
  slug: "open-myomectomy",
  name: "Open - Myomectomy",
  shortName: "Myomectomy",
  price: "₹60,000",
  heroDescription:
    "Safe, effective open myomectomy for uterine fibroid removal with fertility preservation, expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "2,500+", label: "Myomectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Myomectomy?",
  aboutParagraphs: [
    "A myomectomy is a surgical procedure that removes uterine fibroids (leiomyomas) while preserving the uterus, making it the preferred treatment option for women who wish to retain their fertility. Fibroids are non-cancerous growths that can cause heavy bleeding, pain, pressure symptoms, and fertility issues.",
    "Open myomectomy (also known as abdominal myomectomy) involves making an incision in the lower abdomen to access and remove fibroids from the uterine wall. This approach is particularly suitable for women with large, multiple, or deep fibroids. Doctor247 connects you with experienced gynaecological surgeons for safe, effective open myomectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Open Myomectomy?",
      items: [
        "Large uterine fibroids causing heavy menstrual bleeding",
        "Fibroids causing pelvic pain, pressure, or urinary symptoms",
        "Fibroids affecting fertility or causing recurrent miscarriages",
        "Multiple or deep fibroids not suitable for laparoscopic approach",
      ],
    },
    {
      label: "Uterine Fibroid Prevention & Management",
      items: [
        "Maintain a healthy body weight",
        "Regular gynaecological check-ups for early detection",
        "Monitor symptoms like heavy bleeding or pelvic pain",
        "Consider hormonal management options when appropriate",
      ],
    },
    {
      label: "Complications of Untreated Fibroids",
      items: [
        "Progressive symptoms including heavy bleeding and anaemia",
        "Chronic pelvic pain and pressure symptoms",
        "Fertility issues and pregnancy complications",
        "Degeneration or torsion of fibroids causing acute pain",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Myomectomy — precise fibroid removal with uterine preservation",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in fertility-preserving gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Fertility-Preserving Surgery",
      description:
        "Our meticulous myomectomy technique removes fibroids while carefully preserving the uterine lining and structure, maximizing future fertility potential.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing myomectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Comprehensive Fibroid Removal",
      description:
        "Open approach allows access to large, multiple, or deep-seated fibroids that may not be suitable for minimally invasive techniques.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination",
    "Ultrasound (pelvic) for fibroid assessment",
    "MRI pelvis (for complex fibroid mapping)",
    "Complete blood count (CBC) to check for anaemia",
    "Hysteroscopy (if indicated for intracavitary fibroids)",
    "Endometrial biopsy (if indicated)",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General or spinal anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The uterus is visualized and fibroids are identified",
    "A careful incision is made in the uterine muscle over each fibroid",
    "Fibroids are dissected and removed, preserving healthy uterine tissue",
    "The uterine incisions are meticulously repaired in layers to ensure strength",
    "The abdominal incision is closed with sutures or staples",
    "Procedure typically completed within 1.5-3 hours depending on fibroid size and number",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Discuss pregnancy timing with your surgeon for future fertility",
  ],
  postOpDont: [
    "Don't lift heavy weights for 6-8 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
    "Don't plan pregnancy before discussing optimal timing with your surgeon",
  ],
  testimonials: [
    {
      quote:
        "“I had multiple large fibroids causing heavy bleeding. The open myomectomy removed all of them and preserved my uterus for future fertility. The surgeon was excellent.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My fibroids were too large for laparoscopic surgery. The open myomectomy was performed with great precision and I'm grateful for the fertility-preserving approach.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured proper healing. Highly recommend Doctor247 for myomectomy.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is myomectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after open myomectomy?",
      a: "Most patients are discharged within 2-4 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 6-8 weeks.",
    },
    {
      q: "Is myomectomy covered by insurance?",
      a: "Yes, myomectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can I conceive after myomectomy?",
      a: "Yes, fertility is significantly improved after myomectomy for suitable candidates. Most surgeons recommend waiting 3-6 months after surgery before attempting pregnancy to allow the uterus to heal completely.",
    },
    {
      q: "What is the difference between myomectomy and hysterectomy?",
      a: "Myomectomy removes only the fibroids while preserving the uterus and fertility. Hysterectomy removes the entire uterus, resulting in permanent loss of fertility. Myomectomy is preferred for women who wish to retain their fertility.",
    },
  ],
  metaTitle: "Open Myomectomy in Bangalore | Uterine Fibroid Removal with Fertility Preservation — Doctor247",
  metaDescription:
    "Best open myomectomy in Bangalore starting at ₹60,000. Expert uterine fibroid removal with fertility preservation, cashless insurance, experienced gynaecological surgeons.",
  metaKeywords:
    "open myomectomy in bangalore, myomectomy cost bangalore, uterine fibroid removal, fertility-preserving fibroid surgery, best gynaecologist bangalore, myomectomy surgery",
},

"laparoscopic-myomectomy": {
  slug: "laparoscopic-myomectomy",
  name: "Laparoscopic - Myomectomy",
  shortName: "Laparoscopic Myomectomy",
  price: "₹67,000",
  heroDescription:
    "Advanced laparoscopic myomectomy for uterine fibroid removal with fertility preservation, tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "2,000+", label: "Laparoscopic Myomectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Laparoscopic Myomectomy?",
  aboutParagraphs: [
    "A laparoscopic myomectomy is a minimally invasive surgical procedure that removes uterine fibroids (leiomyomas) while preserving the uterus, making it the preferred treatment option for women who wish to retain their fertility. Fibroids are non-cancerous growths that can cause heavy bleeding, pain, pressure symptoms, and fertility issues.",
    "This advanced technique uses small incisions, a camera, and specialized instruments to remove fibroids with precision, offering faster recovery, less pain, and minimal scarring compared to open surgery. Doctor247 connects you with experienced gynaecological surgeons for safe, effective laparoscopic myomectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Myomectomy?",
      items: [
        "Small to moderate-sized uterine fibroids causing heavy bleeding",
        "Fibroids causing pelvic pain, pressure, or urinary symptoms",
        "Fibroids affecting fertility or causing recurrent miscarriages",
        "Preference for minimally invasive approach with faster recovery",
      ],
    },
    {
      label: "Uterine Fibroid Prevention & Management",
      items: [
        "Maintain a healthy body weight",
        "Regular gynaecological check-ups for early detection",
        "Monitor symptoms like heavy bleeding or pelvic pain",
        "Consider hormonal management options when appropriate",
      ],
    },
    {
      label: "Complications of Untreated Fibroids",
      items: [
        "Progressive symptoms including heavy bleeding and anaemia",
        "Chronic pelvic pain and pressure symptoms",
        "Fertility issues and pregnancy complications",
        "Degeneration or torsion of fibroids causing acute pain",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — precise fibroid removal with faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in advanced laparoscopic gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Laparoscopic Fibroid Removal",
      description:
        "We perform precise laparoscopic myomectomy with careful fibroid enucleation and meticulous uterine repair, ensuring optimal fertility preservation with minimally invasive precision.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing laparoscopic myomectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Minimal Scarring",
      description:
        "Laparoscopic approach offers significantly faster recovery, less post-operative pain, shorter hospital stay, and minimal scarring compared to open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination",
    "Ultrasound (pelvic) for fibroid assessment",
    "MRI pelvis (for complex fibroid mapping)",
    "Complete blood count (CBC) to check for anaemia",
    "Hysteroscopy (if indicated for intracavitary fibroids)",
    "Endometrial biopsy (if indicated)",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions are made in the abdomen",
    "Carbon dioxide gas is used to inflate the abdomen for better visualization",
    "A laparoscope (camera) and specialized instruments are inserted",
    "A careful incision is made in the uterine muscle over each fibroid",
    "Fibroids are dissected and removed using morcellation if needed",
    "The uterine incisions are meticulously repaired in layers to ensure strength",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 1.5-3 hours depending on fibroid size and number",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation and prevent blood clots",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Discuss pregnancy timing with your surgeon for future fertility",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, heavy bleeding, or wound redness — call us immediately",
    "Don't plan pregnancy before discussing optimal timing with your surgeon",
  ],
  testimonials: [
    {
      quote:
        "“I had a fibroid affecting my fertility. The laparoscopic myomectomy removed it with minimal scarring and faster recovery. I'm now planning my pregnancy. Grateful to Doctor247.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and quicker recovery. The surgeon was highly skilled and preserved my fertility perfectly. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured proper healing. Excellent care from the team.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic myomectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic myomectomy causes significantly less post-operative pain than open surgery due to smaller incisions.",
    },
    {
      q: "How long does recovery take after laparoscopic myomectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 1 week, and full recovery typically takes 2-3 weeks.",
    },
    {
      q: "Is laparoscopic myomectomy covered by insurance?",
      a: "Yes, laparoscopic myomectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Can I conceive after laparoscopic myomectomy?",
      a: "Yes, fertility is significantly improved after myomectomy for suitable candidates. Most surgeons recommend waiting 3-6 months after surgery before attempting pregnancy to allow the uterus to heal completely.",
    },
    {
      q: "What is the advantage of laparoscopic over open myomectomy?",
      a: "Laparoscopic myomectomy offers several advantages: smaller incisions, less post-operative pain, faster recovery, shorter hospital stay, minimal scarring, and earlier return to normal activities.",
    },
  ],
  metaTitle: "Laparoscopic Myomectomy in Bangalore | Fibroid Removal with Fertility Preservation — Doctor247",
  metaDescription:
    "Best laparoscopic myomectomy in Bangalore starting at ₹67,000. Advanced uterine fibroid removal with fertility preservation, faster recovery, cashless insurance, expert surgeons.",
  metaKeywords:
    "laparoscopic myomectomy in bangalore, myomectomy cost bangalore, uterine fibroid removal, fertility-preserving fibroid surgery, best gynaecologist bangalore, laparoscopic fibroid surgery",
},

"open-ovarian-cystectomy": {
  slug: "open-ovarian-cystectomy",
  name: "Ovarian Cystectomy - Open",
  shortName: "Open Ovarian Cystectomy",
  price: "₹37,500",
  heroDescription:
    "Safe, effective open ovarian cystectomy for removal of ovarian cysts with ovarian preservation, expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get advanced gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,000+", label: "Ovarian Cystectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Ovarian Cystectomy?",
  aboutParagraphs: [
    "An ovarian cystectomy is a surgical procedure that removes ovarian cysts while preserving the healthy ovarian tissue. Ovarian cysts are fluid-filled sacs that develop on or within the ovary, which can cause pain, pressure, and in some cases, affect fertility.",
    "Open ovarian cystectomy (also known as abdominal ovarian cystectomy) involves making an incision in the lower abdomen to access and remove the cyst while preserving the ovary. This approach is particularly suitable for women with large cysts, complex cysts, or those requiring complete removal of the cyst. Doctor247 connects you with experienced gynaecological surgeons for safe, effective open ovarian cystectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Open Ovarian Cystectomy?",
      items: [
        "Large ovarian cysts (larger than 8-10 cm)",
        "Complex ovarian cysts with septations or solid components",
        "Dermoid cysts or endometriomas requiring complete removal",
        "Cysts causing significant pain, pressure, or torsion",
      ],
    },
    {
      label: "Ovarian Health & Prevention",
      items: [
        "Regular gynaecological check-ups and pelvic examinations",
        "Monitor and report symptoms of pelvic pain or bloating",
        "Ultrasound monitoring for known ovarian cysts",
        "Know your family history of ovarian conditions",
      ],
    },
    {
      label: "Complications of Untreated Ovarian Cysts",
      items: [
        "Progressive growth causing pain and pressure symptoms",
        "Ovarian torsion (twisting of the ovary) — a surgical emergency",
        "Rupture of the cyst causing acute pain and internal bleeding",
        "Potential malignancy in complex or solid cysts",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Ovarian Cystectomy — precise cyst removal with ovarian preservation",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Cyst Removal with Ovarian Preservation",
      description:
        "We perform meticulous cystectomy, carefully removing the cyst while preserving maximum healthy ovarian tissue for optimal fertility and hormonal function.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Gynaecological Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing ovarian cystectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Comprehensive Cyst Removal",
      description:
        "Open approach allows access to large, complex, or deep-seated cysts that may not be suitable for laparoscopic techniques.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination",
    "Ultrasound (pelvic) for cyst assessment",
    "MRI pelvis (for complex cyst evaluation)",
    "CA-125 blood test (if malignancy is suspected)",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General or spinal anaesthesia for a pain-free procedure",
    "A low transverse (bikini-line) or vertical incision is made in the lower abdomen",
    "The ovary is carefully dissected and the cyst is identified",
    "A precise incision is made in the ovary to remove the cyst",
    "The cyst is carefully separated from healthy ovarian tissue",
    "The ovarian tissue is repaired with fine sutures",
    "The abdominal incision is closed with sutures or staples",
    "Procedure typically completed within 1-2 hours depending on cyst size and complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check and histopathology results",
  ],
  postOpDont: [
    "Don't lift heavy weights for 4-6 weeks",
    "Don't engage in sexual intercourse for at least 4-6 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your histopathology review appointment",
  ],
  testimonials: [
    {
      quote:
        "“I had a large ovarian cyst that was causing severe pain. The open cystectomy removed it completely and preserved my ovary. Excellent surgical care.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The surgeon was highly skilled and removed my complex cyst safely. The 90-day follow-ups gave me complete peace of mind. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The recovery was well managed and I'm back to normal activities. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is ovarian cystectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after open ovarian cystectomy?",
      a: "Most patients are discharged within 2-3 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 4-6 weeks.",
    },
    {
      q: "Is ovarian cystectomy covered by insurance?",
      a: "Yes, ovarian cystectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will I be able to conceive after ovarian cystectomy?",
      a: "Yes, ovarian cystectomy preserves the ovary and fertility. Most women can conceive normally after surgery. Your surgeon may recommend waiting a few months before attempting pregnancy.",
    },
    {
      q: "What is the difference between cystectomy and oophorectomy?",
      a: "Cystectomy removes only the cyst while preserving the ovary and its function. Oophorectomy removes the entire ovary. Cystectomy is preferred for women who wish to preserve fertility and hormonal function.",
    },
  ],
  metaTitle: "Ovarian Cystectomy in Bangalore | Open Cyst Removal with Ovarian Preservation — Doctor247",
  metaDescription:
    "Best open ovarian cystectomy in Bangalore starting at ₹37,500. Expert ovarian cyst removal with fertility preservation, cashless insurance, experienced gynaecological surgeons.",
  metaKeywords:
    "ovarian cystectomy in bangalore, ovarian cyst removal cost, open ovarian cyst surgery, ovarian cyst treatment, best gynaecologist bangalore, cystectomy surgery",
},

"laparoscopic-ovarian-cystectomy": {
  slug: "laparoscopic-ovarian-cystectomy",
  name: "Ovarian Cystectomy - Laparoscopic",
  shortName: "Laparoscopic Ovarian Cystectomy",
  price: "₹50,000",
  heroDescription:
    "Advanced laparoscopic ovarian cystectomy for removal of ovarian cysts with ovarian preservation, tiny incisions, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art gynaecological surgery by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "4,000+", label: "Laparoscopic Ovarian Cystectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Laparoscopic Ovarian Cystectomy?",
  aboutParagraphs: [
    "A laparoscopic ovarian cystectomy is a minimally invasive surgical procedure that removes ovarian cysts while preserving the healthy ovarian tissue. Ovarian cysts are fluid-filled sacs that develop on or within the ovary, which can cause pain, pressure, and in some cases, affect fertility.",
    "This advanced technique uses small incisions, a camera, and specialized instruments to remove cysts with precision, offering faster recovery, less pain, and minimal scarring compared to open surgery. Doctor247 connects you with experienced gynaecological surgeons for safe, effective laparoscopic ovarian cystectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Laparoscopic Ovarian Cystectomy?",
      items: [
        "Persistent ovarian cysts causing pain or discomfort",
        "Cysts larger than 5 cm that do not resolve spontaneously",
        "Complex cysts with septations or solid components",
        "Dermoid cysts or endometriomas requiring removal",
        "Preference for minimally invasive approach with faster recovery",
      ],
    },
    {
      label: "Ovarian Health & Prevention",
      items: [
        "Regular gynaecological check-ups and pelvic examinations",
        "Monitor and report symptoms of pelvic pain or bloating",
        "Ultrasound monitoring for known ovarian cysts",
        "Know your family history of ovarian conditions",
      ],
    },
    {
      label: "Complications of Untreated Ovarian Cysts",
      items: [
        "Progressive growth causing pain and pressure symptoms",
        "Ovarian torsion (twisting of the ovary) — a surgical emergency",
        "Rupture of the cyst causing acute pain and internal bleeding",
        "Potential malignancy in complex or solid cysts",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Laparoscopic Technique — precise cyst removal with faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Surgeons — every surgeon is credential-checked with extensive experience in advanced laparoscopic gynaecological surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Laparoscopic Cyst Removal",
      description:
        "We perform meticulous laparoscopic cystectomy with careful cyst enucleation and ovarian repair, ensuring optimal ovarian preservation with minimally invasive precision.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Laparoscopic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing laparoscopic ovarian cystectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Faster Recovery & Minimal Scarring",
      description:
        "Laparoscopic approach offers significantly faster recovery, less post-operative pain, shorter hospital stay, and minimal scarring compared to open surgery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Pelvic examination",
    "Ultrasound (pelvic) for cyst assessment",
    "MRI pelvis (for complex cyst evaluation)",
    "CA-125 blood test (if malignancy is suspected)",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "3-4 small keyhole incisions are made in the abdomen",
    "Carbon dioxide gas is used to inflate the abdomen for better visualization",
    "A laparoscope (camera) and specialized instruments are inserted",
    "The ovary is carefully dissected and the cyst is identified",
    "A precise incision is made in the ovary to remove the cyst",
    "The cyst is carefully separated from healthy ovarian tissue",
    "The ovarian tissue is repaired with fine sutures",
    "The cyst is removed through the incision using a retrieval bag",
    "The incisions are closed with dissolvable sutures",
    "Procedure typically completed within 45-90 minutes depending on cyst size and complexity",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Walk short distances from day 1 to aid circulation",
    "Eat light, easily digestible foods and progress gradually",
    "Attend your follow-up visit within 7-10 days for wound check and histopathology results",
  ],
  postOpDont: [
    "Don't lift heavy weights for 2-3 weeks",
    "Don't engage in sexual intercourse for at least 2-3 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your histopathology review appointment",
  ],
  testimonials: [
    {
      quote:
        "“I had a large ovarian cyst causing pain. The laparoscopic cystectomy removed it with minimal scarring and faster recovery. Excellent care from Doctor247.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The laparoscopic approach meant less pain and quicker recovery. The surgeon preserved my ovary perfectly. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups gave me complete peace of mind. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is laparoscopic ovarian cystectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Laparoscopic ovarian cystectomy causes significantly less post-operative pain than open surgery due to smaller incisions.",
    },
    {
      q: "How long does recovery take after laparoscopic ovarian cystectomy?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 3-5 days, and full recovery typically takes 2-3 weeks.",
    },
    {
      q: "Is laparoscopic ovarian cystectomy covered by insurance?",
      a: "Yes, laparoscopic ovarian cystectomy is covered by most health insurance plans in India for medically indicated conditions. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Will I be able to conceive after laparoscopic ovarian cystectomy?",
      a: "Yes, ovarian cystectomy preserves the ovary and fertility. Most women can conceive normally after surgery. Your surgeon may recommend waiting 2-3 months before attempting pregnancy.",
    },
    {
      q: "What is the advantage of laparoscopic over open ovarian cystectomy?",
      a: "Laparoscopic approach offers several advantages: smaller incisions, less post-operative pain, faster recovery, shorter hospital stay, minimal scarring, and earlier return to normal activities.",
    },
  ],
  metaTitle: "Laparoscopic Ovarian Cystectomy in Bangalore | Ovarian Cyst Removal — Doctor247",
  metaDescription:
    "Best laparoscopic ovarian cystectomy in Bangalore starting at ₹50,000. Advanced ovarian cyst removal with fertility preservation, faster recovery, cashless insurance, expert surgeons.",
  metaKeywords:
    "laparoscopic ovarian cystectomy in bangalore, ovarian cyst removal cost, ovarian cyst surgery, fertility-preserving cyst removal, best gynaecologist bangalore, laparoscopic cystectomy",
},

"normal-delivery": {
  slug: "normal-delivery",
  name: "Normal Delivery with Well Baby Care (Single/Twins)",
  shortName: "Normal Delivery",
  price: "₹30,000",
  heroDescription:
    "Safe, natural normal delivery with comprehensive well baby care for single or twin pregnancies. Expert obstetric care, pain management, cashless insurance, no-cost EMI, and free follow-ups. Get quality maternity care by verified obstetricians in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "8,000+", label: "Deliveries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Normal Delivery?",
  aboutParagraphs: [
    "Normal delivery (also known as vaginal delivery) is the natural process of childbirth where the baby is delivered through the birth canal. It is the most common and preferred mode of delivery for uncomplicated pregnancies, offering benefits such as faster recovery, lower risk of complications, and early bonding with the baby.",
    "This package includes comprehensive care for both mother and baby during labour, delivery, and the immediate postpartum period. It also includes well baby care, which covers essential newborn assessments, vaccinations, and guidance on feeding and care. Doctor247 connects you with experienced obstetricians for safe, quality normal delivery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Normal Delivery?",
      items: [
        "Uncomplicated, low-risk pregnancy",
        "Baby in cephalic (head-down) position",
        "No contraindications to vaginal delivery",
        "Mother's preference for natural childbirth",
      ],
    },
    {
      label: "Pregnancy & Prenatal Care",
      items: [
        "Regular antenatal check-ups for monitoring",
        "Balanced nutrition and folic acid supplementation",
        "Adequate hydration and moderate exercise",
        "Attend childbirth education classes",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Inadequate prenatal care leading to undetected complications",
        "Increased risk of maternal and neonatal morbidity",
        "Premature labour without medical support",
        "Undiagnosed fetal distress or malpresentation",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Obstetric Care — experienced obstetricians for safe delivery",
        "Comprehensive Well Baby Care — newborn assessments and vaccinations",
        "Free Follow-ups — post-delivery consultations included for 90 days",
        "No-Cost EMI — split your delivery cost into easy monthly instalments with zero interest",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Obstetric Care",
      description:
        "Our experienced obstetricians provide comprehensive care throughout labour and delivery, ensuring a safe and positive childbirth experience.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Pain Management Options",
      description:
        "We offer various pain relief options including epidural analgesia, nitrous oxide, and natural pain management techniques for a comfortable delivery.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Comprehensive Well Baby Care",
      description:
        "Includes essential newborn assessments, APGAR scoring, Vitamin K injection, BCG and Hepatitis B vaccination, hearing screening, and feeding guidance.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations for both mother and baby.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Complete antenatal profile assessment",
    "Ultrasound for fetal well-being and position",
    "CTG (cardiotocography) for fetal monitoring",
    "Blood tests including CBC, blood grouping, and Rh factor",
    "Group B Streptococcus screening (if indicated)",
    "Fitness assessment for normal delivery",
  ],
  procedureSteps: [
    "Admission to the labour ward in early labour",
    "Monitoring of maternal vitals and fetal heart rate",
    "Progressive cervical dilation and descent of the baby",
    "Pain management as per maternal choice",
    "Active pushing phase and delivery of the baby",
    "Immediate newborn assessment (APGAR scoring)",
    "Delivery of placenta (third stage of labour)",
    "Perineal repair (if episiotomy or tear)",
    "Initiation of breastfeeding and mother-baby bonding",
    "Procedure typically completed within 6-18 hours depending on labour progression",
  ],
  postOpDo: [
    "Initiate breastfeeding within the first hour",
    "Maintain good personal hygiene and perineal care",
    "Take prescribed iron and calcium supplements",
    "Attend your follow-up visit within 1 week for newborn assessment",
    "Monitor for signs of postpartum complications",
  ],
  postOpDont: [
    "Don't ignore heavy bleeding, severe pain, or fever — call us immediately",
    "Don't lift heavy weights for 6 weeks",
    "Don't miss newborn vaccination appointments",
    "Don't delay seeking help for breastfeeding difficulties",
  ],
  testimonials: [
    {
      quote:
        "“I had a wonderful normal delivery experience at Doctor247. The obstetrician was supportive and the well baby care was excellent. The team made me feel safe and comfortable throughout.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I delivered my twins normally with Doctor247. The team was exceptional in managing the twin delivery and the babies received excellent care. Highly recommend.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups for both me and my baby gave me complete peace of mind. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is normal delivery painful?",
      a: "Some discomfort is expected during labour, but we offer various pain management options including epidural, nitrous oxide, and natural techniques to ensure a comfortable delivery experience.",
    },
    {
      q: "How long is the hospital stay after normal delivery?",
      a: "Most patients are discharged within 24-48 hours after an uncomplicated normal delivery. Twin deliveries may require a slightly longer stay for observation.",
    },
    {
      q: "Is normal delivery covered by insurance?",
      a: "Yes, normal delivery is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is included in well baby care?",
      a: "Well baby care includes essential newborn assessments (APGAR scoring), Vitamin K injection, BCG and Hepatitis B vaccination, hearing screening, birth weight monitoring, and guidance on feeding, cord care, and overall newborn care.",
    },
    {
      q: "What is the difference between single and twin delivery care?",
      a: "Twin delivery requires additional monitoring during labour due to the higher risk of complications. The care package includes extra staffing, continuous fetal monitoring for both babies, and preparedness for emergency interventions if needed.",
    },
  ],
  metaTitle: "Normal Delivery in Bangalore | Maternity Care with Well Baby Care — Doctor247",
  metaDescription:
    "Best normal delivery in Bangalore starting at ₹30,000. Expert obstetric care for single or twin pregnancies, comprehensive well baby care, cashless insurance.",
  metaKeywords:
    "normal delivery in bangalore, normal delivery cost, maternity care, well baby care, twin delivery, best gynaecologist bangalore, childbirth care",
},

"lscs-delivery": {
  slug: "lscs-delivery",
  name: "LSCS with Well Baby Care (Single/Twins)",
  shortName: "LSCS Delivery",
  price: "₹40,000",
  heroDescription:
    "Safe, planned or emergency LSCS (Lower Segment Cesarean Section) with comprehensive well baby care for single or twin pregnancies. Expert obstetric care, cashless insurance, no-cost EMI, and free follow-ups. Get quality maternity care by verified obstetricians in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "10,000+", label: "LSCS Deliveries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is LSCS (Lower Segment Cesarean Section)?",
  aboutParagraphs: [
    "LSCS (Lower Segment Cesarean Section) is a surgical procedure in which the baby is delivered through an incision made in the mother's lower abdomen and uterus. It may be planned (elective) or performed as an emergency procedure when vaginal delivery poses risks to the mother or baby.",
    "This package includes comprehensive care for both mother and baby during the C-section, the immediate postpartum period, and well baby care covering essential newborn assessments, vaccinations, and guidance on feeding and care. Doctor247 connects you with experienced obstetricians for safe, quality LSCS delivery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose LSCS?",
      items: [
        "Breech presentation or other malpresentations",
        "Previous C-section delivery",
        "Fetal distress requiring immediate delivery",
        "Multiple pregnancies with complications",
        "Placenta previa or other placental abnormalities",
        "Obstructed labour or cephalopelvic disproportion",
      ],
    },
    {
      label: "Pregnancy & Prenatal Care",
      items: [
        "Regular antenatal check-ups for monitoring",
        "Balanced nutrition and folic acid supplementation",
        "Adequate hydration and moderate exercise",
        "Preparation for C-section including pre-operative assessment",
      ],
    },
    {
      label: "Complications if Untreated",
      items: [
        "Fetal distress leading to neonatal complications",
        "Maternal complications from prolonged labour",
        "Uterine rupture in cases of previous C-section",
        "Increased maternal and neonatal morbidity",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Obstetric Care — experienced obstetricians for safe C-section delivery",
        "Comprehensive Well Baby Care — newborn assessments and vaccinations",
        "Free Follow-ups — post-delivery consultations included for 90 days",
        "No-Cost EMI — split your delivery cost into easy monthly instalments with zero interest",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Obstetric & Surgical Care",
      description:
        "Our experienced obstetricians perform LSCS with precision, ensuring the safety of both mother and baby during the procedure.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Comprehensive Well Baby Care",
      description:
        "Includes essential newborn assessments, APGAR scoring, Vitamin K injection, BCG and Hepatitis B vaccination, hearing screening, and feeding guidance.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Planned & Emergency C-Section Expertise",
      description:
        "Our team is skilled in both elective and emergency LSCS, ensuring prompt and safe delivery in any situation.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations for both mother and baby.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Complete antenatal profile assessment",
    "Ultrasound for fetal well-being, position, and placental assessment",
    "CTG (cardiotocography) for fetal monitoring",
    "Blood tests including CBC, blood grouping, Rh factor, and cross-matching",
    "ECG and fitness assessment for anaesthesia",
    "Group B Streptococcus screening (if indicated)",
  ],
  procedureSteps: [
    "Pre-operative assessment and preparation",
    "Spinal/epidural or general anaesthesia depending on the case",
    "A low transverse incision is made in the lower abdomen and uterus",
    "The baby is carefully delivered through the incision",
    "Immediate newborn assessment (APGAR scoring) and cord clamping",
    "The placenta is delivered and the uterus is closed in layers",
    "The abdominal incision is closed with sutures or staples",
    "Initiation of breastfeeding and mother-baby bonding in recovery",
    "Procedure typically completed within 45-60 minutes",
  ],
  postOpDo: [
    "Initiate breastfeeding as soon as possible after recovery",
    "Walk short distances from day 1 to aid circulation",
    "Take prescribed pain relief and antibiotics on schedule",
    "Keep the surgical site clean and dry",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't lift anything heavier than your baby for 6 weeks",
    "Don't drive or operate machinery until cleared by your doctor",
    "Don't ignore fever, increased pain, or wound redness — call us immediately",
    "Don't miss newborn vaccination appointments",
  ],
  testimonials: [
    {
      quote:
        "“My LSCS was performed with great care and precision. The team was supportive and the well baby care was excellent. I felt safe and well-cared for throughout.”",
      name: "S. Reddy",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“I delivered twins via LSCS at Doctor247. The team managed the surgery and the babies' care exceptionally well. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups for both me and my baby gave me complete peace of mind. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is LSCS delivery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long is the hospital stay after LSCS?",
      a: "Most patients are discharged within 2-3 days after an uncomplicated LSCS. Twin deliveries may require a slightly longer stay for observation.",
    },
    {
      q: "Is LSCS covered by insurance?",
      a: "Yes, LSCS is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is included in well baby care?",
      a: "Well baby care includes essential newborn assessments (APGAR scoring), Vitamin K injection, BCG and Hepatitis B vaccination, hearing screening, birth weight monitoring, and guidance on feeding, cord care, and overall newborn care.",
    },
    {
      q: "What is the difference between planned and emergency LSCS?",
      a: "Planned (elective) LSCS is scheduled in advance for specific indications like breech presentation or previous C-section. Emergency LSCS is performed urgently when complications arise during labour, such as fetal distress or obstructed labour.",
    },
  ],
  metaTitle: "LSCS Delivery in Bangalore | C-Section with Well Baby Care — Doctor247",
  metaDescription:
    "Best LSCS delivery in Bangalore starting at ₹40,000. Expert Lower Segment Cesarean Section for single or twin pregnancies, comprehensive well baby care, cashless insurance.",
  metaKeywords:
    "LSCS in bangalore, C-section delivery cost, cesarean section, maternity care, well baby care, twin delivery, best gynaecologist bangalore",
},

"acl-pcl-mcl-reconstruction": {
  slug: "acl-pcl-mcl-reconstruction",
  name: "ACL / PCL / MCL Reconstruction - Excluding Cost of Implant",
  shortName: "Knee Ligament Reconstruction",
  price: "₹70,000",
  heroDescription:
    "Advanced arthroscopic ACL, PCL, and MCL reconstruction for knee ligament injuries with expert orthopaedic care, faster recovery, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art knee ligament surgery by verified orthopaedic surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.9", label: "Patient Rating" },
    { value: "3,500+", label: "Ligament Reconstructions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Knee Ligament Reconstruction?",
  aboutParagraphs: [
    "ACL (Anterior Cruciate Ligament), PCL (Posterior Cruciate Ligament), and MCL (Medial Collateral Ligament) are major ligaments in the knee that provide stability. Injuries to these ligaments are common in sports, accidents, or falls, causing instability, pain, and difficulty with daily activities.",
    "Arthroscopic ligament reconstruction is a minimally invasive surgical procedure that rebuilds the torn ligament using a graft (tendon from the patient or a donor). The surgery is performed through small incisions using a camera and specialized instruments. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective knee ligament reconstruction in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Ligament Reconstruction?",
      items: [
        "Complete ACL/PCL/MCL tear confirmed by MRI",
        "Knee instability affecting daily activities or sports",
        "Recurrent giving way or buckling of the knee",
        "Inability to return to sports after conservative treatment",
        "Associated meniscal injuries requiring repair",
      ],
    },
    {
      label: "Preventing Knee Ligament Injuries",
      items: [
        "Strength training for hamstrings and quadriceps",
        "Plyometric and balance training",
        "Proper warm-up before sports activities",
        "Use of appropriate protective gear",
        "Avoid sudden changes in direction without proper conditioning",
      ],
    },
    {
      label: "Complications of Untreated Ligament Injuries",
      items: [
        "Progressive knee instability",
        "Secondary meniscal injuries",
        "Early onset osteoarthritis",
        "Reduced athletic performance and quality of life",
        "Chronic pain and disability",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Arthroscopic Reconstruction — precise ligament reconstruction with faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in sports medicine and knee surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Arthroscopic Technique",
      description:
        "We perform ligament reconstruction using advanced arthroscopic techniques, ensuring minimal tissue damage, less post-operative pain, and faster recovery.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience in performing ACL, PCL, and MCL reconstructions with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Tailored Graft Selection",
      description:
        "We offer graft options including autografts (hamstring, patellar tendon, quadriceps) and allografts, selected based on your specific needs and activity level.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination (Lachman, Anterior drawer, PCL drawer, Valgus/Varus stress tests)",
    "X-ray of the knee",
    "MRI of the knee for ligament and meniscal assessment",
    "CT scan (if needed for bone tunnel planning)",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "Spinal or general anaesthesia for a pain-free procedure",
    "2-4 small keyhole incisions are made in the knee",
    "An arthroscope (camera) and specialized instruments are inserted",
    "The torn ligament is identified and debrided",
    "Bone tunnels are drilled in the femur and tibia",
    "The graft (autograft or allograft) is passed through the tunnels",
    "The graft is fixed with interference screws, endobuttons, or other fixation devices",
    "The incisions are closed with sutures",
    "Procedure typically completed within 1.5-2.5 hours depending on the ligament",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Follow the physiotherapy protocol as advised",
    "Use crutches as instructed (non-weight bearing for ACL, limited weight bearing for PCL)",
    "Apply ice packs to reduce swelling",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't put full weight on the operated leg until cleared",
    "Don't engage in pivoting or twisting sports for at least 9-12 months",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your physiotherapy sessions",
  ],
  testimonials: [
    {
      quote:
        "“I tore my ACL playing football and was worried about surgery. The reconstruction was done arthroscopically and I'm back to playing sports. Great care from Doctor247.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“Excellent surgical care for my PCL reconstruction. The surgeon was highly skilled and the physiotherapy protocol was well-structured. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is ligament reconstruction surgery painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after ligament reconstruction?",
      a: "The rehabilitation phase typically takes 6-9 months. Return to sports may take 9-12 months. Physiotherapy is crucial for regaining strength and stability.",
    },
    {
      q: "Is ligament reconstruction covered by insurance?",
      a: "Yes, ACL/PCL/MCL reconstruction is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What graft options are available?",
      a: "Options include autografts (hamstring, patellar tendon, quadriceps) and allografts (donor tissue). Your surgeon will recommend the best option based on your age, activity level, and specific ligament injury.",
    },
    {
      q: "What is the difference between ACL, PCL, and MCL reconstruction?",
      a: "ACL reconstruction uses standard arthroscopic technique with bone tunnels in femur and tibia. PCL reconstruction is more technically demanding with additional tunnels. MCL reconstruction is usually performed open, often with other ligament procedures. Your surgeon will tailor the approach to your specific injury.",
    },
  ],
  metaTitle: "ACL/PCL/MCL Reconstruction in Bangalore | Knee Ligament Surgery — Doctor247",
  metaDescription:
    "Best ACL, PCL, and MCL reconstruction in Bangalore starting at ₹70,000. Advanced arthroscopic knee ligament surgery, cashless insurance, expert orthopaedic surgeons.",
  metaKeywords:
    "ACL reconstruction in bangalore, PCL reconstruction, MCL reconstruction, knee ligament surgery cost, best orthopaedic surgeon bangalore, sports injury treatment",
},

"menisectomy": {
  slug: "menisectomy",
  name: "Menisectomy (Arthroscopic)",
  shortName: "Menisectomy",
  price: "₹60,000",
  heroDescription:
    "Advanced arthroscopic menisectomy for torn meniscus with expert orthopaedic care, faster recovery, minimal scarring, cashless insurance, no-cost EMI, and free follow-ups. Get state-of-the-art knee surgery by verified orthopaedic surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "4,500+", label: "Menisectomies Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Menisectomy?",
  aboutParagraphs: [
    "The meniscus is a C-shaped piece of cartilage in the knee that acts as a shock absorber between the thigh bone (femur) and shin bone (tibia). A meniscal tear can occur from sports injuries, twisting movements, or age-related degeneration, causing pain, swelling, and locking of the knee.",
    "Arthroscopic menisectomy is a minimally invasive surgical procedure that removes the torn portion of the meniscus while preserving healthy tissue. The surgery is performed through small incisions using a camera and specialized instruments. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective menisectomy in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Menisectomy?",
      items: [
        "Torn meniscus causing knee pain and swelling",
        "Knee locking or catching sensation",
        "Limited range of motion in the knee",
        "Failed conservative treatment (medication and physiotherapy)",
        "Meniscal tears that cannot be repaired",
      ],
    },
    {
      label: "Preventing Meniscal Injuries",
      items: [
        "Strengthen quadriceps and hamstring muscles",
        "Proper warm-up before sports activities",
        "Use proper technique when changing direction",
        "Wear appropriate footwear for sports",
        "Maintain a healthy body weight",
      ],
    },
    {
      label: "Complications of Untreated Meniscal Tears",
      items: [
        "Progressive knee pain and swelling",
        "Chronic knee instability",
        "Early onset osteoarthritis",
        "Reduced quality of life and mobility",
        "Inability to participate in sports or physical activities",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Advanced Arthroscopic Technique — precise menisectomy with faster recovery",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in knee surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Arthroscopic Menisectomy",
      description:
        "We perform precise partial menisectomy using advanced arthroscopic techniques, preserving maximum healthy meniscal tissue for better long-term outcomes.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing menisectomies with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimally Invasive with Faster Recovery",
      description:
        "Arthroscopic menisectomy uses 2-3 small incisions, resulting in less post-operative pain, quicker recovery, and minimal scarring.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination (McMurray's test, Apley's test)",
    "X-ray of the knee (to rule out fractures or arthritis)",
    "MRI of the knee for detailed meniscal assessment",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "Spinal or general anaesthesia for a pain-free procedure",
    "2-3 small keyhole incisions are made in the knee",
    "An arthroscope (camera) and specialized instruments are inserted",
    "The knee is filled with sterile saline for better visualization",
    "The torn portion of the meniscus is identified",
    "The damaged meniscal tissue is carefully trimmed and removed",
    "The remaining healthy meniscus is contoured for smooth edges",
    "The incisions are closed with sutures or steri-strips",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the leg elevated when resting",
    "Follow physiotherapy protocol as advised",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't put full weight on the operated knee until cleared",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your physiotherapy sessions",
    "Don't return to sports without your surgeon's clearance",
  ],
  testimonials: [
    {
      quote:
        "“I had a torn meniscus from playing badminton. The arthroscopic menisectomy was quick and recovery was smooth. I'm back to playing sports now.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The surgeon was highly skilled and removed the torn portion of my meniscus with precision. The 90-day follow-ups ensured my complete recovery.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The physiotherapy protocol was excellent. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is menisectomy painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after menisectomy?",
      a: "Most patients return to light daily activities within 1-2 weeks. Sports and heavy activities may take 4-6 weeks. Physiotherapy is crucial for full recovery.",
    },
    {
      q: "Is menisectomy covered by insurance?",
      a: "Yes, menisectomy is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between meniscectomy and meniscus repair?",
      a: "Menisectomy removes the torn portion of the meniscus, while meniscus repair involves suturing the torn edges together. Repair is preferred for tears in the vascular zone (outer part) in younger patients. Menisectomy is preferred for tears that cannot be repaired.",
    },
    {
      q: "Can a meniscus grow back after meniscectomy?",
      a: "The meniscus does not grow back after meniscectomy. However, preserving as much healthy tissue as possible helps maintain knee stability and reduces the risk of long-term complications like arthritis.",
    },
  ],
  metaTitle: "Arthroscopic Menisectomy in Bangalore | Torn Meniscus Surgery — Doctor247",
  metaDescription:
    "Best menisectomy in Bangalore starting at ₹60,000. Expert arthroscopic meniscus surgery, faster recovery, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "menisectomy in bangalore, meniscus surgery cost, arthroscopic menisectomy, torn meniscus treatment, best orthopaedic surgeon bangalore, knee surgery",
},

"carpal-tunnel-release": {
  slug: "carpal-tunnel-release",
  name: "Carpal Tunnel Release (Unilateral)",
  shortName: "Carpal Tunnel Release",
  price: "₹40,000",
  heroDescription:
    "Safe, effective carpal tunnel release surgery for unilateral carpal tunnel syndrome with expert hand surgery care, faster recovery, cashless insurance, no-cost EMI, and free follow-ups. Get relief from hand numbness and pain by verified orthopaedic surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,000+", label: "Carpal Tunnel Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Carpal Tunnel Syndrome?",
  aboutParagraphs: [
    "Carpal tunnel syndrome is a condition caused by compression of the median nerve as it passes through the carpal tunnel in the wrist. It results in numbness, tingling, and weakness in the hand and fingers, particularly the thumb, index, and middle fingers. It is commonly associated with repetitive hand movements, pregnancy, diabetes, and other medical conditions.",
    "Carpal tunnel release is a surgical procedure that divides the transverse carpal ligament to relieve pressure on the median nerve. This can be performed through a small open incision or endoscopically. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective carpal tunnel release in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Carpal Tunnel Release?",
      items: [
        "Persistent numbness and tingling in the hand and fingers",
        "Weakness in grip strength or dropping objects",
        "Symptoms not responding to conservative treatment (splinting, steroid injections)",
        "Progressive muscle wasting in the thumb (thenar atrophy)",
        "Night-time symptoms disturbing sleep",
      ],
    },
    {
      label: "Preventing Carpal Tunnel Syndrome",
      items: [
        "Take frequent breaks from repetitive hand activities",
        "Use ergonomic equipment and proper wrist positioning",
        "Perform hand and wrist stretching exercises",
        "Manage underlying conditions like diabetes and arthritis",
        "Maintain a healthy body weight",
      ],
    },
    {
      label: "Complications of Untreated Carpal Tunnel Syndrome",
      items: [
        "Progressive nerve damage and muscle wasting",
        "Permanent loss of hand strength and sensation",
        "Reduced quality of life and hand function",
        "Inability to perform daily activities and work tasks",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Carpal Tunnel Release — precise surgery for lasting relief",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in hand surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Carpal Tunnel Release",
      description:
        "We perform precise carpal tunnel release using open or endoscopic techniques, ensuring complete release of the median nerve with minimal complications.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Hand Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing carpal tunnel release surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimally Invasive Options",
      description:
        "We offer both open and endoscopic carpal tunnel release techniques, with the endoscopic approach allowing smaller incisions, faster recovery, and less scarring.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination (Tinel's sign, Phalen's test)",
    "Nerve conduction studies (NCS) to assess nerve compression",
    "Electromyography (EMG) to evaluate muscle involvement",
    "X-ray of the wrist (to rule out other causes)",
    "Blood tests to assess for underlying conditions",
  ],
  procedureSteps: [
    "Local or regional anaesthesia for a pain-free procedure",
    "A small incision is made in the palm or wrist area",
    "The transverse carpal ligament is identified",
    "The ligament is divided to release pressure on the median nerve",
    "Open technique uses a 2-3 cm incision; endoscopic uses 1-2 small incisions",
    "The wound is closed with fine sutures",
    "A light dressing is applied",
    "Procedure typically completed within 15-30 minutes",
  ],
  postOpDo: [
    "Keep the dressing clean and dry for 24-48 hours",
    "Elevate the hand to reduce swelling",
    "Take prescribed pain relief on schedule",
    "Start gentle finger exercises as advised",
    "Attend your follow-up visit within 7-10 days for stitch removal",
  ],
  postOpDont: [
    "Don't use the operated hand for heavy lifting for 2-3 weeks",
    "Don't drive until cleared by your surgeon",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had carpal tunnel syndrome causing numbness and pain in my hand. The surgery gave me immediate relief. Recovery was quick and I'm back to normal activities.”",
      name: "S. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The endoscopic carpal tunnel release was quick and painless. The small incision healed beautifully. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgeon was very experienced and the 90-day follow-ups were thorough.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is carpal tunnel release painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is mild and managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after carpal tunnel release?",
      a: "Most patients return to light activities within 1-2 weeks and full activities within 4-6 weeks. Endoscopic approach may offer faster recovery.",
    },
    {
      q: "Is carpal tunnel release covered by insurance?",
      a: "Yes, carpal tunnel release is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between open and endoscopic carpal tunnel release?",
      a: "Open carpal tunnel release uses a 2-3 cm incision in the palm. Endoscopic carpal tunnel release uses 1-2 small incisions and a camera. Endoscopic approach offers smaller scars and potentially faster recovery.",
    },
    {
      q: "Will carpal tunnel syndrome come back after surgery?",
      a: "Recurrence is rare after carpal tunnel release (less than 3%). If symptoms persist, they may be due to other conditions like cervical radiculopathy or peripheral neuropathy. Your surgeon will investigate if needed.",
    },
  ],
  metaTitle: "Carpal Tunnel Release Surgery in Bangalore | Hand Surgery — Doctor247",
  metaDescription:
    "Best carpal tunnel release in Bangalore starting at ₹40,000. Expert hand surgery for carpal tunnel syndrome, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "carpal tunnel release in bangalore, carpal tunnel surgery cost, hand surgery, carpal tunnel syndrome treatment, best orthopaedic surgeon bangalore",
},

"closed-reduction-dislocation-minor": {
  slug: "closed-reduction-dislocation-minor",
  name: "Closed Reduction Dislocation - Minor",
  shortName: "Closed Reduction",
  price: "₹30,000",
  heroDescription:
    "Safe, effective closed reduction for minor joint dislocations with expert orthopaedic care, immediate pain relief, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic emergency care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "2,500+", label: "Closed Reductions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Joint Dislocation?",
  aboutParagraphs: [
    "A joint dislocation occurs when the bones in a joint are forced out of their normal position, causing pain, swelling, deformity, and loss of function. Common sites for minor dislocations include the fingers, toes, elbow, and shoulder. Closed reduction is a non-surgical procedure that restores the bones to their normal alignment without making an incision.",
    "Closed reduction is performed under anaesthesia or sedation, and the joint is carefully manipulated back into position. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective closed reduction in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Closed Reduction?",
      items: [
        "Acute joint dislocation without fracture (or with minor non-displaced fracture)",
        "Dislocation of fingers, toes, elbow, or shoulder",
        "Joint deformity with loss of function",
        "Severe pain and swelling at the joint",
      ],
    },
    {
      label: "Preventing Joint Dislocations",
      items: [
        "Avoid high-risk activities without proper training",
        "Use protective gear during sports",
        "Strengthen muscles around joints",
        "Maintain joint flexibility through stretching",
        "Avoid falls by keeping your environment clear of hazards",
      ],
    },
    {
      label: "Complications of Untreated Dislocations",
      items: [
        "Persistent joint deformity",
        "Chronic pain and instability",
        "Nerve damage from prolonged compression",
        "Reduced range of motion and function",
        "Risk of avascular necrosis (especially hip)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Closed Reduction — precise joint reduction for immediate relief",
        "Free Follow-ups — post-reduction consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in orthopaedic emergencies",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Closed Reduction",
      description:
        "We perform closed reduction with precision and care, ensuring the joint is restored to its normal position with minimal trauma and immediate pain relief.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing closed reductions with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Non-Surgical Approach",
      description:
        "Closed reduction is performed without making any incisions, offering the benefits of no scars, minimal risk, and faster recovery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the dislocated joint",
    "X-ray of the affected joint (pre and post-reduction)",
    "CT scan (if needed for complex cases)",
    "Neurovascular assessment of the affected limb",
  ],
  procedureSteps: [
    "Initial assessment and X-ray confirmation of dislocation",
    "Analgesia or sedation for pain relief during the procedure",
    "Gentle manipulation of the joint to restore normal alignment",
    "Post-reduction X-ray to confirm successful reduction",
    "Application of splint or sling for immobilization",
    "Procedure typically completed within 15-30 minutes",
  ],
  postOpDo: [
    "Keep the joint immobilized as advised",
    "Apply ice packs to reduce swelling",
    "Take prescribed pain relief and antibiotics on schedule",
    "Attend your follow-up visit within 7-10 days for assessment",
    "Follow the gradual mobilization plan as advised",
  ],
  postOpDont: [
    "Don't bear weight or use the joint until cleared",
    "Don't remove the splint/sling without doctor's advice",
    "Don't ignore numbness, tingling, or color change in the limb — call us immediately",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I dislocated my finger playing basketball. The closed reduction was quick and painless. I was back to normal within a few weeks. Great care.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My son dislocated his elbow and the closed reduction was performed with great care. The team was supportive and explained everything clearly.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is closed reduction painful?",
      a: "The procedure is performed under analgesia or sedation, so you'll have minimal to no pain during the reduction. Some discomfort may be experienced after the procedure, which is managed with pain medication.",
    },
    {
      q: "How long does recovery take after closed reduction?",
      a: "Recovery time depends on the joint involved. Minor joint dislocations typically require 2-4 weeks of immobilization followed by gradual mobilization. Full recovery may take 4-6 weeks.",
    },
    {
      q: "Is closed reduction covered by insurance?",
      a: "Yes, closed reduction of dislocations is covered by most health insurance plans in India as an emergency procedure. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between closed and open reduction?",
      a: "Closed reduction is performed without making any incisions, using manual manipulation to restore the joint. Open reduction requires surgery with an incision and is used when closed reduction fails or when there is an associated fracture requiring surgical fixation.",
    },
    {
      q: "What happens if closed reduction fails?",
      a: "If closed reduction is unsuccessful, open reduction may be required. This involves surgery with an incision to manually reposition the bones and possibly fix them with screws or plates.",
    },
  ],
  metaTitle: "Closed Reduction of Dislocations in Bangalore | Orthopaedic Emergency Care — Doctor247",
  metaDescription:
    "Best closed reduction for dislocations in Bangalore starting at ₹30,000. Expert non-surgical joint reduction, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "closed reduction in bangalore, dislocation treatment cost, joint reduction, orthopaedic emergency, best orthopaedic surgeon bangalore, finger dislocation treatment",
},

"closed-reduction-dislocation-major": {
  slug: "closed-reduction-dislocation-major",
  name: "Closed Reduction Dislocation - Major",
  shortName: "Closed Reduction Major",
  price: "₹55,000",
  heroDescription:
    "Safe, effective closed reduction for major joint dislocations with expert orthopaedic care, immediate pain relief, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic emergency care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "1,800+", label: "Major Closed Reductions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is a Major Joint Dislocation?",
  aboutParagraphs: [
    "A major joint dislocation occurs when the bones in a weight-bearing or large joint are forced out of their normal position, causing severe pain, swelling, deformity, and loss of function. Common sites for major dislocations include the hip, knee, and shoulder (especially recurrent or complex dislocations). These injuries often result from high-energy trauma such as motor vehicle accidents, falls from height, or severe sports injuries.",
    "Closed reduction is a non-surgical procedure that restores the bones to their normal alignment without making an incision. This is performed under anaesthesia or sedation, and the joint is carefully manipulated back into position. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective closed reduction for major dislocations in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Closed Reduction for Major Dislocation?",
      items: [
        "Major joint dislocation (hip, knee, shoulder, ankle) without associated fracture",
        "Acute dislocation with significant pain and deformity",
        "Dislocation requiring urgent reduction to prevent complications",
        "Recurrent dislocations requiring closed reduction",
      ],
    },
    {
      label: "Preventing Joint Dislocations",
      items: [
        "Avoid high-risk activities without proper training",
        "Use protective gear during sports",
        "Strengthen muscles around major joints",
        "Maintain joint flexibility through stretching",
        "Avoid falls by keeping your environment clear of hazards",
      ],
    },
    {
      label: "Complications of Untreated Major Dislocations",
      items: [
        "Persistent joint deformity and instability",
        "Nerve and vascular damage from prolonged compression",
        "Avascular necrosis (especially hip dislocation)",
        "Chronic pain and arthritis",
        "Permanent loss of joint function",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Closed Reduction — precise reduction for major joint dislocations",
        "Free Follow-ups — post-reduction consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in orthopaedic emergencies",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Closed Reduction",
      description:
        "We perform closed reduction with precision and care for major joints, ensuring the joint is restored to its normal position with minimal trauma and immediate pain relief.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing major joint closed reductions with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Non-Surgical Approach",
      description:
        "Closed reduction is performed without making any incisions, offering the benefits of no scars, minimal risk, and faster recovery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the dislocated joint",
    "X-ray of the affected joint (pre and post-reduction)",
    "CT scan (for complex cases or to rule out associated fractures)",
    "Neurovascular assessment of the affected limb",
    "ECG and fitness assessment (if under general anaesthesia)",
  ],
  procedureSteps: [
    "Initial assessment and X-ray confirmation of dislocation",
    "IV access and monitoring for sedation/anaesthesia",
    "Analgesia or general anaesthesia for pain relief",
    "Gentle manipulation of the joint under anaesthesia",
    "Post-reduction X-ray to confirm successful reduction",
    "Application of splint, cast, or traction for immobilization",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Keep the joint immobilized as advised",
    "Apply ice packs to reduce swelling",
    "Take prescribed pain relief and antibiotics on schedule",
    "Attend your follow-up visit within 7-10 days for assessment",
    "Follow the gradual mobilization plan as advised",
  ],
  postOpDont: [
    "Don't bear weight or use the joint until cleared",
    "Don't remove the splint/cast without doctor's advice",
    "Don't ignore numbness, tingling, or color change in the limb — call us immediately",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a hip dislocation from a car accident. The closed reduction was performed under anaesthesia and I felt immediate relief. The recovery was well managed.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My shoulder kept dislocating and the closed reduction was performed with great expertise. The team was very supportive throughout.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is closed reduction for major dislocations painful?",
      a: "The procedure is performed under anaesthesia or deep sedation, so you'll have minimal to no pain during the reduction. Some discomfort may be experienced after the procedure, which is managed with pain medication.",
    },
    {
      q: "How long does recovery take after major dislocation reduction?",
      a: "Recovery time depends on the joint involved. Major joint dislocations typically require 4-8 weeks of immobilization followed by gradual mobilization. Full recovery may take 2-4 months.",
    },
    {
      q: "Is closed reduction for major dislocations covered by insurance?",
      a: "Yes, closed reduction of major joint dislocations is covered by most health insurance plans in India as an emergency procedure. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between minor and major joint dislocation?",
      a: "Minor dislocations typically involve smaller joints like fingers, toes, or elbow, with lower energy trauma and quicker recovery. Major dislocations involve larger weight-bearing joints like hip, knee, or shoulder, require more complex reduction, longer immobilization, and have higher risk of complications.",
    },
    {
      q: "What is the difference between closed and open reduction for major dislocations?",
      a: "Closed reduction is performed without making any incisions, using manual manipulation under anaesthesia. Open reduction requires surgery with an incision and is used when closed reduction fails, when there is an associated fracture requiring surgical fixation, or when there is a soft tissue interposition blocking reduction.",
    },
  ],
  metaTitle: "Closed Reduction of Major Dislocations in Bangalore | Orthopaedic Emergency Care — Doctor247",
  metaDescription:
    "Best closed reduction for major joint dislocations in Bangalore starting at ₹55,000. Expert non-surgical reduction, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "major joint dislocation reduction, closed reduction hip, closed reduction shoulder, dislocation treatment cost, best orthopaedic surgeon bangalore, emergency orthopaedic care",
},

"implant-removal-minor": {
  slug: "implant-removal-minor",
  name: "Implant Removal - Minor (Except K-Wire)",
  shortName: "Implant Removal Minor",
  price: "₹30,000",
  heroDescription:
    "Safe, effective minor implant removal surgery for orthopaedic implants including plates, screws, and nails (except K-wires). Expert surgical care, faster recovery, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Implant Removals Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Implant Removal?",
  aboutParagraphs: [
    "Implant removal is a surgical procedure performed to remove orthopaedic hardware such as plates, screws, and nails that were previously inserted to stabilize fractures or correct deformities. These implants may be removed for various reasons including implant-related pain, infection, implant failure, or after the bone has completely healed.",
    "Minor implant removal typically involves removing small implants from bones such as the forearm, wrist, ankle, or clavicle. The procedure is performed under anaesthesia through a small incision over the implant site. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective minor implant removal in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Implant Removal?",
      items: [
        "Implant-related pain or discomfort",
        "Infection around the implant site",
        "Implant failure or loosening",
        "After complete bone healing (elective removal)",
        "Patient request for implant removal",
      ],
    },
    {
      label: "Common Implants Removed",
      items: [
        "Small plates (forearm, wrist, ankle, clavicle)",
        "Screws (cortical and cancellous)",
        "Intramedullary nails (small diameter)",
        "Tension band wires (except K-wires)",
        "Small external fixator pins",
      ],
    },
    {
      label: "Complications if Implant Not Removed When Indicated",
      items: [
        "Persistent implant-related pain",
        "Risk of infection or implant loosening",
        "Implant failure or breakage",
        "Stress shielding and bone weakening",
        "Difficulty with future imaging (MRI/CT)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Implant Removal — precise removal with minimal tissue damage",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in implant removal",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Precise Implant Removal",
      description:
        "We perform meticulous removal of implants using the appropriate instruments, ensuring complete removal with minimal damage to surrounding tissues.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing implant removals with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Minimally Invasive & Faster Recovery",
      description:
        "We use small incisions and careful surgical technique, resulting in less tissue trauma, minimal scarring, and faster recovery.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the implant site",
    "X-ray of the implant to assess condition and bone healing",
    "CT scan (if needed for complex cases)",
    "Blood tests including inflammatory markers (if infection is suspected)",
    "ECG and fitness assessment before surgery",
  ],
  procedureSteps: [
    "Local, regional, or general anaesthesia depending on the case",
    "A small incision is made over the implant site",
    "The implant is identified and exposed",
    "Screws are removed using appropriate screwdrivers",
    "The plate or nail is carefully removed",
    "The wound is thoroughly irrigated and closed with sutures",
    "A sterile dressing is applied",
    "Procedure typically completed within 30-60 minutes",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Attend your follow-up visit within 7-10 days for stitch removal",
    "Follow the rehabilitation plan as advised",
  ],
  postOpDont: [
    "Don't lift heavy weights for 2-3 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't get the wound wet until it is healed",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a plate in my wrist that was causing pain. The removal surgery was quick and recovery was smooth. I'm so happy to have the implant out.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The surgeon removed my ankle screws with great precision. The incisions were small and healed beautifully. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is implant removal painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative discomfort is mild to moderate and managed with prescribed pain medication.",
    },
    {
      q: "How long does recovery take after implant removal?",
      a: "Most patients return to light activities within 1-2 weeks. Full recovery typically takes 3-4 weeks. Since the bone has already healed, recovery is generally faster than the initial implant surgery.",
    },
    {
      q: "Is implant removal covered by insurance?",
      a: "Yes, implant removal is covered by most health insurance plans in India when medically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "When should implants be removed?",
      a: "Implants are typically removed 12-18 months after the initial surgery, once the bone has completely healed. However, removal may be indicated earlier in cases of infection, implant failure, or persistent pain.",
    },
    {
      q: "What is the difference between minor and major implant removal?",
      a: "Minor implant removal involves small implants like plates and screws from areas like the forearm, wrist, ankle, or clavicle. Major implant removal involves larger implants like hip/knee prosthesis, extensive plates, or implants requiring significant soft tissue dissection.",
    },
  ],
  metaTitle: "Minor Implant Removal Surgery in Bangalore | Orthopaedic Hardware Removal — Doctor247",
  metaDescription:
    "Best minor implant removal in Bangalore starting at ₹30,000. Expert removal of plates, screws, and nails, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "implant removal in bangalore, orthopaedic hardware removal, plate removal surgery, screw removal cost, best orthopaedic surgeon bangalore, implant removal surgery",
},
"implant-removal-major": {
  slug: "implant-removal-major",
  name: "Implant Removal - Major",
  shortName: "Implant Removal Major",
  price: "₹60,000",
  heroDescription:
    "Safe, comprehensive major implant removal surgery for orthopaedic hardware including hip/knee prosthesis, large plates, and intramedullary nails. Expert surgical care, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "1,200+", label: "Major Implant Removals Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Major Implant Removal?",
  aboutParagraphs: [
    "Major implant removal is a surgical procedure performed to remove large orthopaedic hardware such as hip/knee prostheses, extensive plates, and intramedullary nails that were previously inserted to stabilize fractures, correct deformities, or replace joints. These implants may be removed for various reasons including implant-related pain, infection, implant failure, or after the bone has completely healed.",
    "Major implant removal is a more complex procedure than minor removal, often requiring larger incisions, more extensive dissection, and longer recovery time. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective major implant removal in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Major Implant Removal?",
      items: [
        "Implant-related pain or discomfort",
        "Infection around the implant site (osteomyelitis)",
        "Implant failure, loosening, or breakage",
        "After complete bone healing (elective removal of large plates/nails)",
        "Revision surgery (removal of previous prosthesis)",
        "Patient request for implant removal",
      ],
    },
    {
      label: "Common Major Implants Removed",
      items: [
        "Hip prosthesis (total hip replacement)",
        "Knee prosthesis (total knee replacement)",
        "Large plates (femur, tibia, humerus)",
        "Intramedullary nails (femur, tibia, humerus)",
        "Dynamic hip screws (DHS) and other large implants",
      ],
    },
    {
      label: "Complications if Implant Not Removed When Indicated",
      items: [
        "Persistent implant-related pain",
        "Risk of infection or implant loosening",
        "Implant failure or breakage requiring emergency surgery",
        "Stress shielding and bone weakening",
        "Difficulty with future imaging (MRI/CT)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Major Implant Removal — comprehensive removal with precision",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in complex implant removal",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Implant Removal",
      description:
        "We perform meticulous removal of major implants using specialized instruments and techniques, ensuring complete removal with minimal damage to surrounding tissues.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing major implant removals with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Specialized Equipment & Techniques",
      description:
        "We use specialized extraction instruments and techniques for different implant types, ensuring safe and efficient removal with minimal complications.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the implant site",
    "X-ray of the implant to assess condition and bone healing",
    "CT scan (for complex implant assessment)",
    "Blood tests including inflammatory markers (if infection is suspected)",
    "ECG, chest X-ray, and fitness assessment before surgery",
    "Pre-operative planning with templating",
  ],
  procedureSteps: [
    "General or spinal anaesthesia depending on the case",
    "An incision is made over the implant site",
    "The implant is identified and exposed through careful dissection",
    "Screws are removed using appropriate extraction instruments",
    "The plate, nail, or prosthesis is carefully extracted",
    "Special techniques may be needed for cement removal (if cemented implant)",
    "The wound is thoroughly irrigated with antibiotic solution",
    "A drain may be placed if needed",
    "The wound is closed with sutures or staples",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Use walking aids as advised (crutches, walker)",
    "Start mobilisation as per physiotherapy protocol",
    "Attend your follow-up visit within 7-10 days for wound check",
  ],
  postOpDont: [
    "Don't bear full weight until cleared by your surgeon",
    "Don't lift heavy weights for 6-8 weeks",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't get the wound wet until it is healed",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a large plate in my femur that needed removal. The surgery was complex but the surgeon handled it with great expertise. Recovery was well managed.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My hip replacement needed revision surgery. The implant removal was performed with precision and the team was very supportive throughout.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is major implant removal painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases significantly within the first week.",
    },
    {
      q: "How long does recovery take after major implant removal?",
      a: "Most patients are discharged within 2-4 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 6-8 weeks. Recovery time depends on the site and size of the implant removed.",
    },
    {
      q: "Is major implant removal covered by insurance?",
      a: "Yes, major implant removal is covered by most health insurance plans in India when medically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between minor and major implant removal?",
      a: "Minor implant removal involves small implants like plates and screws from areas like the forearm, wrist, or ankle. Major implant removal involves larger implants like hip/knee prosthesis, large plates, or intramedullary nails from larger bones like the femur, tibia, or hip joint.",
    },
    {
      q: "What are the risks of major implant removal?",
      a: "Risks include bleeding, infection, nerve injury, fracture during removal, incomplete removal, and prolonged recovery. Your surgeon will discuss these risks with you in detail before the procedure.",
    },
  ],
  metaTitle: "Major Implant Removal Surgery in Bangalore | Orthopaedic Hardware Removal — Doctor247",
  metaDescription:
    "Best major implant removal in Bangalore starting at ₹60,000. Expert removal of hip/knee prostheses, large plates, and nails, cashless insurance, experienced surgeons.",
  metaKeywords:
    "major implant removal bangalore, hip prosthesis removal, knee implant removal, orthopaedic hardware removal, best orthopaedic surgeon bangalore, revision surgery",
},

"k-wire-removal": {
  slug: "k-wire-removal",
  name: "K Wire Removal",
  shortName: "K Wire Removal",
  price: "₹25,000",
  heroDescription:
    "Safe, simple K wire removal procedure for orthopaedic patients with expert care, minimal discomfort, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "4,000+", label: "K Wire Removals Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are K Wires?",
  aboutParagraphs: [
    "K wires (Kirschner wires) are thin, sterile, stainless steel wires used in orthopaedic surgery to stabilize fractures or hold bones in place while they heal. They are commonly used in procedures involving the hand, wrist, foot, ankle, and other small bones. K wires are typically removed once the bone has healed, usually 4-8 weeks after the initial surgery.",
    "K wire removal is a simple, quick procedure performed in the clinic or operating room under local anaesthesia. The wire is gently pulled out from the skin and bone. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective K wire removal in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose K Wire Removal?",
      items: [
        "Complete bone healing confirmed by X-ray",
        "At the scheduled time for removal (usually 4-8 weeks after insertion)",
        "K wire causing irritation or infection at the entry site",
        "Patient request for removal after bone healing",
      ],
    },
    {
      label: "K Wire Care During Treatment",
      items: [
        "Keep the K wire entry site clean and dry",
        "Watch for signs of infection (redness, swelling, discharge)",
        "Protect the wire from accidental pulling or snagging",
        "Attend all follow-up appointments for X-ray monitoring",
      ],
    },
    {
      label: "Complications of Delayed K Wire Removal",
      items: [
        "Infection tracking along the wire tract",
        "Irritation and pain at the entry site",
        "Wire migration or breakage",
        "Delayed bone healing if wire remains too long",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert K Wire Removal — simple, quick, and painless procedure",
        "Free Follow-ups — post-removal consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your procedure cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in K wire removal",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Quick & Simple Removal",
      description:
        "K wire removal is a fast and straightforward procedure, typically taking only 5-10 minutes with minimal discomfort and quick recovery.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Minimal Discomfort",
      description:
        "The procedure is performed under local anaesthesia, ensuring you feel minimal to no pain during the removal. Post-procedure discomfort is minimal.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "No Hospital Stay",
      description:
        "K wire removal is performed as an outpatient procedure — you can go home immediately after the removal with no hospital stay required.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your procedure.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the K wire site",
    "X-ray to confirm complete bone healing",
    "Check for signs of infection at the entry site",
  ],
  procedureSteps: [
    "Local anaesthesia is administered at the K wire site",
    "The skin entry site is cleaned with antiseptic solution",
    "The K wire is gently pulled out using special forceps or pliers",
    "The skin puncture site is cleaned and a small dressing is applied",
    "A post-removal X-ray may be taken if required",
    "Procedure typically completed within 5-10 minutes",
  ],
  postOpDo: [
    "Keep the skin puncture site clean and dry for 24-48 hours",
    "Take prescribed pain relief if needed (usually minimal)",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow the rehabilitation plan as advised",
  ],
  postOpDont: [
    "Don't get the puncture site wet for 24 hours",
    "Don't ignore redness, swelling, or discharge — call us immediately",
    "Don't skip your follow-up appointments",
    "Don't return to heavy activities without clearance",
  ],
  testimonials: [
    {
      quote:
        "“I had a K wire in my finger after a fracture. The removal took only a few minutes and I felt almost no pain. Quick and easy process.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My child had a K wire in his wrist. The removal was quick and the team made him feel comfortable. Great care from Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The procedure was quick and I was back home in no time. Highly recommend.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is K wire removal painful?",
      a: "The procedure is performed under local anaesthesia, so you won't feel significant pain during removal. Some patients experience a brief sensation of pressure or pulling. Post-procedure discomfort is minimal.",
    },
    {
      q: "How long does K wire removal take?",
      a: "The removal procedure typically takes 5-10 minutes. You can go home immediately after the procedure.",
    },
    {
      q: "Is K wire removal covered by insurance?",
      a: "Yes, K wire removal is covered by most health insurance plans in India when medically indicated. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "When should K wires be removed?",
      a: "K wires are typically removed 4-8 weeks after insertion, once X-ray confirms complete bone healing. The exact timing depends on the fracture type, patient age, and healing progress.",
    },
    {
      q: "What happens after K wire removal?",
      a: "After removal, the puncture site heals within a few days. Your surgeon may recommend physiotherapy to regain strength and mobility. You can gradually return to normal activities.",
    },
  ],
  metaTitle: "K Wire Removal in Bangalore | Orthopaedic Procedure — Doctor247",
  metaDescription:
    "Best K wire removal in Bangalore starting at ₹25,000. Quick, simple orthopaedic wire removal, cashless insurance, experienced surgeons.",
  metaKeywords:
    "K wire removal in bangalore, Kirschner wire removal, orthopaedic wire removal, k wire removal cost, best orthopaedic surgeon bangalore",
},

"open-reduction-dislocation-minor": {
  slug: "open-reduction-dislocation-minor",
  name: "Open Reduction - Dislocation - Minor",
  shortName: "Open Reduction Minor",
  price: "₹40,000",
  heroDescription:
    "Safe, effective open reduction for minor joint dislocations with expert orthopaedic surgical care, immediate joint restoration, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic surgical care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "1,500+", label: "Open Reductions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Open Reduction for Dislocation?",
  aboutParagraphs: [
    "Open reduction is a surgical procedure performed to restore a dislocated joint to its normal position through an incision. This is necessary when closed reduction (non-surgical manipulation) fails, when there is an associated fracture requiring fixation, or when soft tissue is trapped in the joint blocking reduction.",
    "The procedure involves making an incision over the dislocated joint, removing any tissue blocking the reduction, and manually repositioning the bones. It may also involve repair of damaged ligaments or fixation of associated fractures. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective open reduction for minor dislocations in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Open Reduction for Dislocation?",
      items: [
        "Failed closed reduction",
        "Associated fracture requiring surgical fixation",
        "Soft tissue interposition blocking reduction",
        "Recurrent dislocations requiring ligament repair",
        "Delayed presentation with muscle spasm",
      ],
    },
    {
      label: "Preventing Joint Dislocations",
      items: [
        "Avoid high-risk activities without proper training",
        "Use protective gear during sports",
        "Strengthen muscles around joints",
        "Maintain joint flexibility through stretching",
        "Avoid falls by keeping your environment clear of hazards",
      ],
    },
    {
      label: "Complications of Untreated Dislocations",
      items: [
        "Persistent joint deformity",
        "Chronic pain and instability",
        "Nerve damage from prolonged compression",
        "Reduced range of motion and function",
        "Early onset arthritis",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Open Reduction — precise surgical restoration of joint",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in orthopaedic surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Open Reduction",
      description:
        "We perform precise open reduction with careful tissue handling, ensuring the joint is restored to its normal position with minimal complications.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing open reductions with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Comprehensive Surgical Care",
      description:
        "When needed, we perform associated ligament repair, fracture fixation, and removal of interposed tissue to ensure complete joint restoration.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the dislocated joint",
    "X-ray of the affected joint (pre and post-reduction)",
    "CT scan (if needed for associated fractures)",
    "MRI (if ligament damage is suspected)",
    "Neurovascular assessment of the affected limb",
    "Blood tests and fitness assessment before surgery",
  ],
  procedureSteps: [
    "Regional or general anaesthesia for a pain-free procedure",
    "A small incision is made over the dislocated joint",
    "The joint is carefully explored and tissue blocking reduction is removed",
    "The bones are gently manipulated back into normal position",
    "Associated fractures are fixed with plates, screws, or wires if needed",
    "Damaged ligaments may be repaired",
    "The wound is thoroughly irrigated and closed with sutures",
    "A splint, cast, or brace is applied for immobilization",
    "Procedure typically completed within 45-90 minutes depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the joint immobilized as advised",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow the rehabilitation plan as advised",
  ],
  postOpDont: [
    "Don't bear weight or use the joint until cleared",
    "Don't remove the splint/cast without doctor's advice",
    "Don't ignore numbness, tingling, or color change in the limb — call us immediately",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“My finger dislocation couldn't be reduced closed, so I needed open reduction. The surgery was successful and my finger is back to normal. Great care.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My son had an elbow dislocation that required open reduction. The surgeon was highly skilled and the recovery was well managed.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is open reduction for dislocation painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after open reduction?",
      a: "Most patients are discharged within 1-2 days. Light activities can be resumed in 2-3 weeks, and full recovery typically takes 4-6 weeks. Immobilization is usually required for 2-4 weeks.",
    },
    {
      q: "Is open reduction covered by insurance?",
      a: "Yes, open reduction for dislocations is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between closed and open reduction?",
      a: "Closed reduction is performed without making any incisions, using manual manipulation under anaesthesia. Open reduction requires surgery with an incision and is used when closed reduction fails, when there is an associated fracture requiring fixation, or when soft tissue is trapped in the joint.",
    },
    {
      q: "What are the risks of open reduction?",
      a: "Risks include bleeding, infection, nerve injury, damage to surrounding tissues, stiffness, and recurrence of dislocation. Your surgeon will discuss these risks with you in detail before the procedure.",
    },
  ],
  metaTitle: "Open Reduction of Dislocations in Bangalore | Orthopaedic Surgery — Doctor247",
  metaDescription:
    "Best open reduction for dislocations in Bangalore starting at ₹40,000. Expert surgical joint reduction, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "open reduction in bangalore, dislocation surgery cost, surgical joint reduction, orthopaedic surgery, best orthopaedic surgeon bangalore, finger dislocation surgery",
},

"open-reduction-dislocation-major": {
  slug: "open-reduction-dislocation-major",
  name: "Open Reduction - Dislocation - Major",
  shortName: "Open Reduction Major",
  price: "₹60,000",
  heroDescription:
    "Safe, comprehensive open reduction for major joint dislocations with expert orthopaedic surgical care, immediate joint restoration, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic surgical care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "1,000+", label: "Major Open Reductions Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is Open Reduction for Major Joint Dislocation?",
  aboutParagraphs: [
    "Open reduction is a surgical procedure performed to restore a dislocated major joint (such as the hip, knee, or shoulder) to its normal position through an incision. This is necessary when closed reduction (non-surgical manipulation) fails, when there is an associated fracture requiring fixation, or when soft tissue is trapped in the joint blocking reduction.",
    "Major joint dislocations typically result from high-energy trauma such as motor vehicle accidents, falls from height, or severe sports injuries. The procedure involves making a larger incision over the dislocated joint, removing any tissue blocking reduction, and manually repositioning the bones. It may also involve repair of damaged ligaments, fixation of associated fractures, and addressing any neurovascular injuries. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective open reduction for major dislocations in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Open Reduction for Major Dislocation?",
      items: [
        "Failed closed reduction",
        "Associated fracture requiring surgical fixation",
        "Soft tissue interposition blocking reduction",
        "Recurrent dislocations requiring ligament repair",
        "Delayed presentation with muscle spasm",
        "Associated neurovascular injury",
      ],
    },
    {
      label: "Preventing Major Joint Dislocations",
      items: [
        "Avoid high-risk activities without proper training",
        "Use protective gear during sports",
        "Strengthen muscles around major joints",
        "Maintain joint flexibility through stretching",
        "Avoid falls by keeping your environment clear of hazards",
      ],
    },
    {
      label: "Complications of Untreated Major Dislocations",
      items: [
        "Persistent joint deformity",
        "Chronic pain and instability",
        "Nerve and vascular damage",
        "Reduced range of motion and function",
        "Avascular necrosis (especially hip)",
        "Early onset arthritis",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Open Reduction — comprehensive surgical restoration of major joints",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in complex orthopaedic surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Comprehensive Surgical Restoration",
      description:
        "We perform precise open reduction of major joints with careful tissue handling, ensuring the joint is restored to its normal position with minimal complications.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing major open reductions with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Comprehensive Surgical Care",
      description:
        "We perform associated fracture fixation, ligament repair, removal of interposed tissue, and address any neurovascular injuries to ensure complete joint restoration.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the dislocated joint",
    "X-ray of the affected joint (pre and post-reduction)",
    "CT scan (for associated fractures and assessment)",
    "MRI (if ligament damage is suspected)",
    "Neurovascular assessment of the affected limb",
    "Blood tests and fitness assessment before surgery",
    "ECG and chest X-ray for anaesthesia clearance",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "An adequate incision is made over the dislocated joint",
    "The joint is carefully explored and tissue blocking reduction is removed",
    "The bones are gently manipulated back into normal position",
    "Associated fractures are fixed with plates, screws, or nails if needed",
    "Damaged ligaments may be repaired",
    "The wound is thoroughly irrigated with antibiotic solution",
    "A drain may be placed if needed",
    "The wound is closed with sutures or staples",
    "A splint, cast, or brace is applied for immobilization",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the joint immobilized as advised",
    "Use walking aids as advised (crutches, walker)",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Follow the rehabilitation plan as advised",
  ],
  postOpDont: [
    "Don't bear weight or use the joint until cleared",
    "Don't remove the splint/cast without doctor's advice",
    "Don't ignore numbness, tingling, or color change in the limb — call us immediately",
    "Don't skip your follow-up appointments",
  ],
  testimonials: [
    {
      quote:
        "“I had a hip dislocation from a car accident that couldn't be reduced closed. The open reduction surgery was successful and I'm now walking again. Excellent care.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My shoulder dislocation required open reduction with ligament repair. The surgeon was highly skilled and the recovery was well managed.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is open reduction for major dislocation painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after major open reduction?",
      a: "Most patients are discharged within 3-5 days. Light activities can be resumed in 3-4 weeks, and full recovery typically takes 8-12 weeks. Immobilization is usually required for 4-6 weeks.",
    },
    {
      q: "Is open reduction for major dislocation covered by insurance?",
      a: "Yes, open reduction for major joint dislocations is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between minor and major open reduction?",
      a: "Minor open reduction involves smaller joints like fingers, toes, or elbow with shorter recovery. Major open reduction involves larger weight-bearing joints like hip, knee, or shoulder with longer recovery, higher complexity, and more extensive surgery.",
    },
    {
      q: "What are the risks of major open reduction?",
      a: "Risks include bleeding, infection, nerve injury, damage to surrounding tissues, avascular necrosis (especially hip), stiffness, and recurrence of dislocation. Your surgeon will discuss these risks with you in detail before the procedure.",
    },
  ],
  metaTitle: "Open Reduction of Major Dislocations in Bangalore | Orthopaedic Surgery — Doctor247",
  metaDescription:
    "Best open reduction for major joint dislocations in Bangalore starting at ₹60,000. Expert surgical joint restoration, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "major joint open reduction bangalore, hip dislocation surgery, knee dislocation surgery, shoulder dislocation surgery, orthopaedic trauma surgery, best orthopaedic surgeon bangalore",
},

"orif-k-wire": {
  slug: "orif-k-wire",
  name: "ORIF of Fracture - K Wire (Including Cost of Implant)",
  shortName: "ORIF with K Wire",
  price: "₹50,000",
  heroDescription:
    "Safe, effective Open Reduction and Internal Fixation (ORIF) of fractures using K wires with expert orthopaedic surgical care, implant cost included, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic trauma care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "ORIF K Wire Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is ORIF with K Wire Fixation?",
  aboutParagraphs: [
    "ORIF (Open Reduction and Internal Fixation) is a surgical procedure used to treat fractures. The bone fragments are repositioned (reduced) into their normal alignment and held in place (fixed) with K wires (Kirschner wires). K wires are thin, sterile, stainless steel wires that are inserted across the fracture to stabilize it while the bone heals.",
    "ORIF with K wire fixation is commonly used for fractures in the hand, wrist, foot, ankle, and other small bones. The K wires provide stable fixation without the need for large implants, and they are typically removed once the bone has healed. This package includes the cost of the K wire implants. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective ORIF with K wire fixation in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose ORIF with K Wire?",
      items: [
        "Displaced fractures requiring surgical fixation",
        "Fractures of small bones (hand, foot, wrist, ankle)",
        "Articular fractures requiring precise reduction",
        "Fractures not suitable for casting or closed reduction",
        "Open fractures requiring surgical cleaning and fixation",
      ],
    },
    {
      label: "Preventing Fractures",
      items: [
        "Maintain bone health with calcium and Vitamin D",
        "Weight-bearing exercises for bone strength",
        "Use protective gear during sports",
        "Avoid falls by keeping your environment clear of hazards",
        "Treat underlying conditions like osteoporosis",
      ],
    },
    {
      label: "Complications if Fractures are Not Treated",
      items: [
        "Malunion (healing in wrong position)",
        "Non-union (failure to heal)",
        "Chronic pain and disability",
        "Loss of function and range of motion",
        "Early onset arthritis (for articular fractures)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert ORIF with K Wire — precise surgical fixation for optimal healing",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in fracture surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert ORIF with K Wire Fixation",
      description:
        "We perform precise open reduction and internal fixation using K wires, ensuring anatomical alignment of the fracture for optimal healing and function.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing ORIF procedures with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Implant Cost Included",
      description:
        "The cost of K wire implants is included in the package, with no hidden charges for surgical hardware.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the fracture site",
    "X-ray of the affected bone (AP and lateral views)",
    "CT scan (for intra-articular or complex fractures)",
    "Blood tests and fitness assessment before surgery",
    "ECG and chest X-ray (if indicated)",
  ],
  procedureSteps: [
    "Regional or general anaesthesia for a pain-free procedure",
    "An incision is made over the fracture site",
    "The fracture is carefully exposed and the bone fragments are reduced (realigned)",
    "K wires are inserted across the fracture to hold the fragments in position",
    "The wire ends are either left outside the skin or cut and buried under the skin",
    "The wound is thoroughly irrigated and closed with sutures",
    "A plaster cast or splint is applied for immobilization",
    "Procedure typically completed within 45-90 minutes depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the limb elevated to reduce swelling",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Attend scheduled X-ray follow-ups to assess bone healing",
  ],
  postOpDont: [
    "Don't bear weight or use the limb until cleared",
    "Don't remove the cast/splint without doctor's advice",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up appointments for X-ray monitoring",
  ],
  testimonials: [
    {
      quote:
        "“I fractured my wrist and needed K wire fixation. The surgery was successful and my wrist is healing well. The implant cost was included, which was a relief.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My finger fracture required ORIF with K wires. The surgeon was highly skilled and the recovery was smooth. Great care from Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is ORIF with K wire fixation painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after ORIF with K wires?",
      a: "Most patients are discharged within 1-2 days. Bone healing typically takes 6-8 weeks. Light activities can be resumed in 2-3 weeks, and full recovery takes 8-12 weeks. K wires are usually removed after 4-8 weeks.",
    },
    {
      q: "Is ORIF with K wire fixation covered by insurance?",
      a: "Yes, ORIF with K wire fixation is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Why use K wires instead of plates and screws?",
      a: "K wires are less invasive, require smaller incisions, and are ideal for fractures of small bones. They are removed once the bone heals, avoiding the need for a second surgery for implant removal in some cases.",
    },
    {
      q: "Is K wire removal painful?",
      a: "K wire removal is typically performed in the clinic under local anaesthesia and is not painful. It is a quick procedure taking only a few minutes.",
    },
  ],
  metaTitle: "ORIF with K Wire in Bangalore | Fracture Surgery Including Implant Cost — Doctor247",
  metaDescription:
    "Best ORIF with K wire in Bangalore starting at ₹50,000. Expert fracture surgery with implant cost included, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "ORIF k wire bangalore, fracture surgery with k wire, k wire fixation cost, orthopaedic trauma surgery, best orthopaedic surgeon bangalore, hand fracture surgery",
},

"orif-plating": {
  slug: "orif-plating",
  name: "ORIF of Fracture - Plating (Excluding Cost of Implant)",
  shortName: "ORIF with Plating",
  price: "₹70,000",
  heroDescription:
    "Advanced Open Reduction and Internal Fixation (ORIF) of fractures using locking compression plates with expert orthopaedic surgical care, faster recovery, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic trauma care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "4,000+", label: "ORIF Plating Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is ORIF with Plating?",
  aboutParagraphs: [
    "ORIF (Open Reduction and Internal Fixation) is a surgical procedure used to treat fractures. The bone fragments are repositioned (reduced) into their normal alignment and held in place (fixed) with a plate and screws. Plating provides stable, rigid fixation that allows early mobilization and promotes optimal bone healing.",
    "ORIF with plating is commonly used for fractures of the forearm, wrist, ankle, clavicle, and other long bones. Modern locking compression plates (LCP) provide excellent stability even in osteoporotic bone. This procedure is ideal for fractures that require precise anatomical reduction and stable fixation. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective ORIF with plating in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose ORIF with Plating?",
      items: [
        "Displaced fractures requiring surgical fixation",
        "Intra-articular fractures requiring precise reduction",
        "Fractures of long bones (forearm, humerus, tibia, femur)",
        "Fractures not suitable for casting or closed reduction",
        "Open fractures requiring surgical cleaning and fixation",
        "Fractures requiring early mobilization",
      ],
    },
    {
      label: "Preventing Fractures",
      items: [
        "Maintain bone health with calcium and Vitamin D",
        "Weight-bearing exercises for bone strength",
        "Use protective gear during sports",
        "Avoid falls by keeping your environment clear of hazards",
        "Treat underlying conditions like osteoporosis",
      ],
    },
    {
      label: "Complications if Fractures are Not Treated",
      items: [
        "Malunion (healing in wrong position)",
        "Non-union (failure to heal)",
        "Chronic pain and disability",
        "Loss of function and range of motion",
        "Early onset arthritis (for articular fractures)",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert ORIF with Plating — precise surgical fixation for optimal healing",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in fracture surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Advanced Plating Techniques",
      description:
        "We use modern locking compression plates (LCP) and anatomical contoured plates that provide stable fixation even in osteoporotic bone, allowing early mobilization.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing ORIF procedures with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Early Mobilization",
      description:
        "The stable fixation provided by plates allows early mobilization, reducing the risk of joint stiffness and muscle atrophy.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the fracture site",
    "X-ray of the affected bone (AP and lateral views)",
    "CT scan (for intra-articular or complex fractures)",
    "Blood tests and fitness assessment before surgery",
    "ECG and chest X-ray (if indicated)",
  ],
  procedureSteps: [
    "Regional or general anaesthesia for a pain-free procedure",
    "An incision is made over the fracture site",
    "The fracture is carefully exposed and the bone fragments are reduced (realigned)",
    "A plate of appropriate size is contoured to the bone surface",
    "Screws are inserted through the plate to hold the fracture fragments in position",
    "Locking screws provide angular stability in the plate",
    "The wound is thoroughly irrigated and closed with sutures",
    "A drain may be placed if needed",
    "A plaster cast or splint may be applied for additional support",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the limb elevated to reduce swelling",
    "Start gentle mobilization as advised by your surgeon",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Attend scheduled X-ray follow-ups to assess bone healing",
  ],
  postOpDont: [
    "Don't bear full weight until cleared by your surgeon",
    "Don't remove the cast/splint without doctor's advice",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up appointments for X-ray monitoring",
  ],
  testimonials: [
    {
      quote:
        "“I fractured my forearm and had plating surgery. The fixation is solid and I'm able to move my arm much earlier than I expected. Great care from Doctor247.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My ankle fracture required plating and the surgery was a success. The plate allowed me to start walking earlier. The 90-day follow-ups were thorough.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgeon was highly skilled and the recovery was well managed. Highly recommend Doctor247.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is ORIF with plating painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after ORIF with plating?",
      a: "Most patients are discharged within 2-3 days. Bone healing typically takes 6-12 weeks. Light activities can be resumed in 3-4 weeks, and full recovery takes 12-16 weeks depending on the fracture type and location.",
    },
    {
      q: "Is ORIF with plating covered by insurance?",
      a: "Yes, ORIF with plating is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "Do plates need to be removed after healing?",
      a: "Plates are usually left in place unless they cause symptoms such as pain, prominence, or irritation. If removal is needed, it is typically performed 12-18 months after the initial surgery.",
    },
    {
      q: "What is the difference between locking and non-locking plates?",
      a: "Locking plates have screws that lock into the plate, providing angular stability. This makes them ideal for osteoporotic bone and comminuted fractures. Non-locking plates rely on compression between the plate and bone. Your surgeon will choose the best option for your specific fracture.",
    },
  ],
  metaTitle: "ORIF with Plating in Bangalore | Fracture Surgery — Doctor247",
  metaDescription:
    "Best ORIF with plating in Bangalore starting at ₹70,000. Expert fracture surgery using locking compression plates, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "ORIF plating bangalore, fracture plating surgery, ORIF with plate, locking compression plate surgery, best orthopaedic surgeon bangalore, trauma surgery",
},

"fracture-acetabulum": {
  slug: "fracture-acetabulum",
  name: "Fracture of Acetabulum - ORIF (Excluding Cost of Implant)",
  shortName: "Acetabular Fracture",
  price: "₹70,000",
  heroDescription:
    "Expert Open Reduction and Internal Fixation (ORIF) for acetabular fractures with precision surgical care, hip joint restoration, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic trauma care by verified orthopaedic surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.7", label: "Patient Rating" },
    { value: "800+", label: "Acetabular Fracture Surgeries Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What is an Acetabular Fracture?",
  aboutParagraphs: [
    "An acetabular fracture is a break in the acetabulum, the socket portion of the hip joint that forms the cup-shaped cavity where the femoral head (ball of the thigh bone) sits. These fractures typically result from high-energy trauma such as motor vehicle accidents, falls from height, or severe sports injuries.",
    "Acetabular fractures are complex injuries that require surgical treatment to restore the joint surface and prevent long-term complications like arthritis and hip instability. ORIF (Open Reduction and Internal Fixation) is the standard surgical treatment, involving realignment of the bone fragments and fixation with plates and screws. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective acetabular fracture surgery in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose Acetabular Fracture Surgery?",
      items: [
        "Displaced acetabular fractures requiring surgical fixation",
        "Fractures involving the weight-bearing dome of the acetabulum",
        "Fractures with associated hip joint instability",
        "Open fractures requiring surgical debridement and fixation",
        "Fractures with associated neurovascular injury",
      ],
    },
    {
      label: "Preventing Acetabular Fractures",
      items: [
        "Wear seatbelts during travel to prevent severe injuries",
        "Use protective gear during sports and high-risk activities",
        "Avoid falls by keeping your environment clear of hazards",
        "Maintain bone health with calcium and Vitamin D",
        "Treat underlying conditions like osteoporosis",
      ],
    },
    {
      label: "Complications of Untreated Acetabular Fractures",
      items: [
        "Chronic hip pain and disability",
        "Post-traumatic arthritis",
        "Avascular necrosis of the femoral head",
        "Hip instability and dislocation",
        "Shortened limb and altered gait",
        "Reduced quality of life and mobility",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert Acetabular Fracture Surgery — precision ORIF for complex hip fractures",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in pelvic and acetabular trauma",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Acetabular Fracture Fixation",
      description:
        "We perform precise ORIF for acetabular fractures using advanced surgical approaches and specialized implants, ensuring anatomical reduction and stable fixation.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Pelvic & Acetabular Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing complex pelvic and acetabular fracture surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Advanced Surgical Approaches",
      description:
        "We use specialized approaches including the Kocher-Langenbeck, ilioinguinal, and modified Stoppa approaches, tailored to the fracture pattern for optimal exposure and fixation.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the hip and pelvis",
    "X-ray of the pelvis (AP and Judet views)",
    "CT scan with 3D reconstruction for detailed fracture assessment",
    "Trauma series X-rays (if associated injuries)",
    "Blood tests and fitness assessment before surgery",
    "ECG and chest X-ray for anaesthesia clearance",
  ],
  procedureSteps: [
    "General anaesthesia for a pain-free procedure",
    "Positioning on a traction table for optimal fracture reduction",
    "An appropriate surgical approach is made based on fracture type and location",
    "The fracture is carefully exposed and bone fragments are reduced (realigned)",
    "Reduction is confirmed under image intensifier (fluoroscopy)",
    "Plates and screws are applied to fix the fracture fragments",
    "The wound is thoroughly irrigated with antibiotic solution",
    "A drain is placed if needed",
    "The wound is closed with sutures or staples",
    "Procedure typically completed within 2-4 hours depending on fracture complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Use a walker or crutches as advised (non-weight bearing)",
    "Start gentle range of motion exercises as per physiotherapy protocol",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Attend scheduled X-ray follow-ups to assess bone healing",
  ],
  postOpDont: [
    "Don't bear weight on the operated leg until cleared by your surgeon (usually 8-12 weeks)",
    "Don't remove the dressing without doctor's advice",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up appointments for X-ray monitoring",
  ],
  testimonials: [
    {
      quote:
        "“I had a complex acetabular fracture from a car accident. The surgery was long but the surgeon did an excellent job. I'm walking again now with minimal pain. Grateful to Doctor247.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“The acetabular fracture surgery was performed with great precision. The team was very supportive throughout my recovery. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The 90-day follow-ups ensured my complete recovery. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is acetabular fracture surgery painful?",
      a: "The procedure is performed under general anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after acetabular fracture surgery?",
      a: "Most patients are discharged within 3-5 days. Non-weight bearing is required for 8-12 weeks. Partial weight bearing starts at 8-12 weeks, and full weight bearing at 12-16 weeks. Full recovery takes 4-6 months.",
    },
    {
      q: "Is acetabular fracture surgery covered by insurance?",
      a: "Yes, acetabular fracture surgery is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What are the risks of acetabular fracture surgery?",
      a: "Risks include bleeding, infection, nerve injury (sciatic/femoral nerves), avascular necrosis of the femoral head, post-traumatic arthritis, and implant failure. Your surgeon will discuss these risks with you in detail before the procedure.",
    },
    {
      q: "What is the long-term prognosis after acetabular fracture surgery?",
      a: "With appropriate surgical treatment, most patients achieve good functional outcomes. However, post-traumatic arthritis may develop over time, and some patients may eventually require hip replacement.",
    },
  ],
  metaTitle: "Acetabular Fracture Surgery in Bangalore | ORIF Hip Socket Fracture — Doctor247",
  metaDescription:
    "Best acetabular fracture surgery in Bangalore starting at ₹70,000. Expert ORIF for hip socket fractures, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "acetabular fracture surgery bangalore, hip socket fracture treatment, ORIF acetabulum, pelvic fracture surgery, best orthopaedic surgeon bangalore, trauma surgery",
},

"orif-ankle-talus-calcaneum": {
  slug: "orif-ankle-talus-calcaneum",
  name: "ORIF - Ankle / Talus / Calcaneum (Excluding Cost of Implant)",
  shortName: "ORIF Ankle/Foot",
  price: "₹70,000",
  heroDescription:
    "Expert Open Reduction and Internal Fixation (ORIF) for ankle, talus, and calcaneum fractures with precision surgical care, anatomical restoration, cashless insurance, no-cost EMI, and free follow-ups. Get quality orthopaedic trauma care by verified surgeons in Bangalore at affordable prices.",
  heroImage: "/surgery-harnia.png",
  stats: [
    { value: "4.8", label: "Patient Rating" },
    { value: "3,500+", label: "Ankle/Foot ORIFs Done" },
    { value: "25+", label: "Partner Hospitals" },
    { value: "15+", label: "Insurance Partners" },
  ],
  aboutTitle: "What are Ankle, Talus, and Calcaneum Fractures?",
  aboutParagraphs: [
    "Ankle fractures involve breaks in the tibia and fibula around the ankle joint. Talus fractures are breaks in the bone that connects the foot to the leg, forming the ankle joint. Calcaneum fractures are breaks in the heel bone (calcaneus). These fractures typically result from falls, twisting injuries, sports injuries, or high-energy trauma like motor vehicle accidents.",
    "ORIF (Open Reduction and Internal Fixation) is the standard surgical treatment for displaced fractures of these bones. The procedure involves realigning the bone fragments and fixing them with plates, screws, or other implants. Doctor247 connects you with experienced orthopaedic surgeons for safe, effective ORIF for ankle, talus, and calcaneum fractures in Bangalore.",
  ],
  overviewTabs: [
    {
      label: "When to choose ORIF for Ankle/Talus/Calcaneum?",
      items: [
        "Displaced ankle fractures (unstable, bimalleolar, trimalleolar)",
        "Displaced talus fractures (neck, body, or head)",
        "Displaced calcaneum fractures (joint depression, tongue-type)",
        "Intra-articular fractures requiring anatomical reduction",
        "Open fractures requiring surgical debridement and fixation",
      ],
    },
    {
      label: "Preventing Ankle/Foot Fractures",
      items: [
        "Wear appropriate footwear with proper ankle support",
        "Use protective gear during sports and high-risk activities",
        "Strengthen ankle muscles through exercises",
        "Maintain bone health with calcium and Vitamin D",
        "Avoid falls by keeping your environment clear of hazards",
      ],
    },
    {
      label: "Complications if Left Untreated",
      items: [
        "Malunion leading to ankle arthritis and chronic pain",
        "Non-union (failure to heal)",
        "Avascular necrosis of the talus",
        "Chronic instability and difficulty walking",
        "Reduced quality of life and mobility",
      ],
    },
    {
      label: "Why Doctor247?",
      items: [
        "Expert ORIF for Ankle/Foot Fractures — precision surgical fixation for optimal outcomes",
        "Free Follow-ups — post-surgery consultations included for 90 days at no extra cost",
        "No-Cost EMI — split your surgery cost into easy monthly instalments with zero interest",
        "Verified Orthopaedic Surgeons — every surgeon is credential-checked with extensive experience in foot and ankle surgery",
      ],
    },
  ],
  whyChooseNumbered: [
    {
      number: "01",
      title: "Expert Ankle & Foot Fracture Fixation",
      description:
        "We perform precise ORIF using advanced implants and techniques, ensuring anatomical restoration of the joint surface and stable fixation.",
      bg: BG_CYCLE[0],
    },
    {
      number: "02",
      title: "Experienced Orthopaedic Surgeons",
      description:
        "Every Doctor247 surgeon has a minimum of 8 years of experience performing ankle and foot fracture surgeries with consistently high success rates.",
      bg: BG_CYCLE[1],
    },
    {
      number: "03",
      title: "Specialized Implants & Techniques",
      description:
        "We use anatomical plates, locking plates, and specialized implants for talus and calcaneum fixation, tailored to each specific fracture type.",
      bg: BG_CYCLE[2],
    },
    {
      number: "04",
      title: "Cashless Insurance & Free Follow-ups",
      description:
        "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
      bg: BG_CYCLE[3],
    },
  ],
  diagnosticTests: [
    "Physical examination of the ankle and foot",
    "X-ray of the ankle/foot (AP, lateral, and mortise views)",
    "CT scan (for complex talus and calcaneum fractures)",
    "Blood tests and fitness assessment before surgery",
    "ECG and chest X-ray (if indicated)",
    "Neurovascular assessment of the foot",
  ],
  procedureSteps: [
    "Regional or general anaesthesia for a pain-free procedure",
    "An incision is made over the fracture site",
    "The fracture is carefully exposed and bone fragments are reduced (realigned)",
    "Reduction is confirmed under image intensifier (fluoroscopy)",
    "Plates, screws, or other implants are applied to fix the fracture",
    "For talus fractures: careful fixation to preserve blood supply",
    "For calcaneum fractures: reconstruction of the heel joint surface",
    "The wound is thoroughly irrigated and closed with sutures",
    "A drain may be placed if needed",
    "A plaster cast or splint is applied for immobilization",
    "Procedure typically completed within 1.5-3 hours depending on complexity",
  ],
  postOpDo: [
    "Keep the surgical site clean and dry for 24-48 hours",
    "Take prescribed pain relief and antibiotics on schedule",
    "Apply ice packs to reduce swelling",
    "Keep the limb elevated to reduce swelling",
    "Use crutches or a walker as advised (non-weight bearing)",
    "Attend your follow-up visit within 7-10 days for wound check",
    "Attend scheduled X-ray follow-ups to assess bone healing",
  ],
  postOpDont: [
    "Don't bear weight on the operated foot until cleared (usually 6-12 weeks)",
    "Don't remove the cast/splint without doctor's advice",
    "Don't ignore fever, increased pain, or unusual swelling — call us immediately",
    "Don't skip your follow-up appointments for X-ray monitoring",
  ],
  testimonials: [
    {
      quote:
        "“I had a complex ankle fracture from a fall. The ORIF surgery was successful and my ankle is healing well. The surgeon was excellent and the care was great.”",
      name: "R. Sharma",
      role: "Jayanagar, Bangalore",
    },
    {
      quote:
        "“My calcaneum fracture required surgery and the team did a fantastic job. The 90-day follow-ups ensured my complete recovery. Highly recommend Doctor247.”",
      name: "M. Kumar",
      role: "Koramangala, Bangalore",
    },
    {
      quote:
        "“Transparent pricing and smooth insurance claim. The surgeon was highly skilled and I'm back to walking again. Great experience.”",
      name: "P. Menon",
      role: "Whitefield, Bangalore",
    },
  ],
  faqs: [
    {
      q: "Is ORIF for ankle/foot fractures painful?",
      a: "The procedure is performed under anaesthesia so you won't feel pain during surgery. Post-operative pain is managed with prescribed medication and typically decreases within the first week.",
    },
    {
      q: "How long does recovery take after ankle/foot ORIF?",
      a: "Most patients are discharged within 2-3 days. Non-weight bearing is required for 6-12 weeks. Partial weight bearing starts at 6-12 weeks, and full weight bearing at 12-16 weeks. Full recovery takes 4-6 months.",
    },
    {
      q: "Is ORIF for ankle/foot fractures covered by insurance?",
      a: "Yes, ORIF for ankle, talus, and calcaneum fractures is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
    },
    {
      q: "What is the difference between treating these three fractures?",
      a: "Ankle fractures involve the joint surfaces of the tibia and fibula. Talus fractures are more complex with a risk of avascular necrosis and require careful dissection to preserve blood supply. Calcaneum fractures involve the heel bone and require reconstruction of the subtalar joint. Each requires a specific surgical approach and implants.",
    },
    {
      q: "What implants are used for these fractures?",
      a: "Ankle fractures typically use plates and screws. Talus fractures use small screws (headless or cannulated). Calcaneum fractures use specialized calcaneal plates with screws. Your surgeon will choose the best implant for your specific fracture.",
    },
  ],
  metaTitle: "ORIF for Ankle/Talus/Calcaneum Fractures in Bangalore — Doctor247",
  metaDescription:
    "Best ORIF for ankle, talus, and calcaneum fractures in Bangalore starting at ₹70,000. Expert foot and ankle fracture surgery, cashless insurance, experienced orthopaedic surgeons.",
  metaKeywords:
    "ankle fracture surgery bangalore, talus fracture ORIF, calcaneum fracture surgery, foot fracture treatment, best orthopaedic surgeon bangalore, ankle ORIF cost",
},

};

export const SURGERY_SLUGS = Object.keys(SURGERIES);

export const SURGERY_LIST = Object.values(SURGERIES).map((s) => ({
  slug: s.slug,
  name: s.name,
  price: s.price,
}));
