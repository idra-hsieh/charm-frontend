import * as React from 'react';
import { Html, Head, Body, Container, Text, Img, Heading, Section, Row, Column, Hr, Tailwind, Button, Link } from "@react-email/components";

interface CMIResultEmailProps {
  labels: { 
    title: string; 
    date: string; 
    code: string; 
    type: string; 
    family: string; 
    scores: string; 
    viewReport: string;
    // --- Footer Updates ---
    copyright: string; 
    tagline: string; 
  };
  values: { date: string; code: string; typeName: string; familyName: string; scores: string; viewUrl?: string; };
}

const defaultProps = {
  labels: { 
    title: "Analysis Complete", 
    date: "ASSESSMENT DATE", 
    code: "UNIQUE ID", 
    type: "ARCHETYPE", 
    family: "FAMILY", 
    scores: "TRAIT BREAKDOWN", 
    viewReport: "View Full Report",
    // --- Mock Data ---
    copyright: "©2025 Charm.",
    tagline: "Designed with clarity and compassion."
  },
  values: { date: "Dec 07, 2025", code: "IOIOIO", typeName: "The Theorist", familyName: "The Organizers", scores: "Openness: 82% | Conscientiousness: 90% | Extraversion: 45%", viewUrl: "" }
};

export const CMIResultEmail = ({ labels, values }: CMIResultEmailProps) => {
  const safeLabels = { ...defaultProps.labels, ...labels };
  const safeValues = { ...defaultProps.values, ...values };
  
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://charm-money.vercel.app")).replace(/\/$/, "");
  const viewUrl = safeValues.viewUrl || `${baseUrl}/cmi-test/result/${safeValues.code}`;

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[40px] mx-auto w-[480px]">
            <Section className="bg-white rounded-2xl overflow-hidden shadow-lg border border-solid border-[#eaeaea]">
              <Section className="bg-[#1a1a1a] py-8 text-center">
                <Img src={`${baseUrl}/images/charm-logo.png`} width="80" height="50" alt="Charm" className="mx-auto mb-4 object-contain" />
                <Text className="text-[#BB9364] text-[10px] font-bold tracking-[0.3em] m-0">{safeLabels.title}</Text>
              </Section>
              <Section className="px-8 pt-8 text-center">
                <Text className="text-gray-500 text-[10px] uppercase tracking-[widest] font-bold mb-2 font-medium">{safeLabels.type}</Text>
                <Heading
                  className="text-black text-[28px] font-semibold m-0 tracking-wide leading-tight"
                  style={{ fontFamily: "'Optima', 'Times New Roman', serif" }}
                >
                  {safeValues.typeName}
                </Heading>
                <Text
                  className="text-[#BB9364] text-[13px] font-medium tracking-wider mt-2"
                  style={{ fontFamily: "'Optima', 'Times New Roman', serif" }}
                >
                  {safeValues.familyName}
                </Text>
              </Section>
              <Hr className="border-[#eaeaea] my-8 w-[520px]" />
              <Section className="px-8 py-2">
                <Row className="mb-4">
                  <Column className="w-1/2 align-top pr-2 border-r border-solid border-[#f0f0f0]">
                     <Text className="text-gray-400 text-[9px] font-bold uppercase tracking-widest m-0 mb-1 mt-1 ml-3">{safeLabels.code}</Text>
                     <Text className="text-[#BB9364] tracking-wider text-[14px] font-medium mt-1 font-mono ml-3">{safeValues.code}</Text>
                  </Column>
                  <Column className="w-1/2 align-top pl-4">
                    <Text className="text-gray-400 text-[9px] font-bold uppercase tracking-widest m-0 mb-1 ml-3">{safeLabels.date}</Text>
                    <Text className="text-[#050505] tracking-tight text-[12px] font-medium mt-1 font-mono ml-3">{safeValues.date}</Text>
                  </Column>
                </Row>
                <div className="mt-6">
                  <Text className="text-gray-400 text-[9px] font-bold uppercase tracking-widest m-0 mb-2 ml-1">{safeLabels.scores}</Text>
                  <Section className="bg-[#fcfcfc] border border-dashed border-[#e0e0e0] rounded-lg p-4">
                    <Text className="text-[#444] text-[11px] font-mono capitalize leading-relaxed m-0 whitespace-pre-wrap">
                      {safeValues.scores.split('|').map((score, i) => (
                        <span key={i} className="block mb-1 last:mb-0"><span className="text-[#BB9364] mr-2">➜</span>{score.trim()}</span>
                      ))}
                    </Text>
                  </Section>
                </div>
              </Section>
              <Section className="text-center px-8 pt-4 pb-10">
                <div style={{ textAlign: "center" }}>
                  <Button
                    href={viewUrl}
                    className="no-underline"
                    style={{
                      backgroundColor: "#050505",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "14px 20px",
                      borderRadius: "12px",
                      width: "480px",
                      display: "block",
                      margin: "0 auto",
                      textDecoration: "none",
                    }}
                  >
                    {safeLabels.viewReport}
                  </Button>
                </div>
              </Section>
            </Section>
            
            {/* --- Updated Footer Section --- */}
            <Section className="mt-8 text-center pb-8">
              {/* Copyright */}
              <Text className="text-[#999999] text-[10px] m-0">
                {safeLabels.copyright}
              </Text>
              {/* Tagline */}
               <Text className="text-[#BB9364] text-[10px] tracking-widest opacity-80 m-0 mb-2">
                {safeLabels.tagline}
              </Text>
            </Section>
            
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default CMIResultEmail;
