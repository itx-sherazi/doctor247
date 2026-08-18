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


};

export const SURGERY_SLUGS = Object.keys(SURGERIES);

export const SURGERY_LIST = Object.values(SURGERIES).map((s) => ({
  slug: s.slug,
  name: s.name,
  price: s.price,
}));
