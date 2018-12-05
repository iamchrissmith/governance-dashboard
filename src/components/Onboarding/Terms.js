import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {
  Box,
  Text,
  Grid,
  Card,
  Button,
  Flex,
  Overflow,
  Link
} from '@makerdao/ui-components';

const terms = `
#### 1. Acceptance of Terms
Please read these Terms of Use (the “Terms” or “Terms of Use”) carefully before using the Service. By using or otherwise accessing the Service, or clicking to accept or agree to these Terms where that option is made available, you (1) agree that you have read and understand these Terms (2) accept and agree to these Terms and (3) any additional terms, rules and conditions of participation issued from time-to-time. If you do not agree to the Terms, then you may not access or use the Content or Service.
MKR is a cryptographic governance token used in the Dai System and Software, which is an autonomous system of smart contracts on the Ethereum Blockchain (the “Open Source Software”), that permits, among other things, the generation of Dai. Dai is a cryptocurrency intended to maintain low-volatility against other assets. MKR token holders may use their MKR to collectively govern certain rules of use of the Open Source Software, including participation in voting over some key aspects of the Open Source Software or the MakerDAO project (the “Voting”). Any MKR token holder may participate in any Voting by independently interacting with the relevant smart contracts within the Open Source Software (the “Voting Contracts”). Some members and developers of the MakerDAO community and its Open Source Software (collectively the “MakerDAO Volunteers”) have provided you with a user interface, including the one available at https://vote.makerdao.com and via other tools (the “Site”) — which includes text, images, audio, code and other materials (collectively, the “Content”) and all of the features, and services provided. The Site, the Voting Contracts, and any other features, tools, materials, the Open Source Software, or other services offered from time to time are referred to here as the “Service”.  This agreement (the “Agreement”) between you and the MakerDAO Volunteers (“we”, “us”, “our”) sets out your rights to access and use of and any of the Services provided by us.
Note however, that while the Voting Contracts and the Site are intended to serve as a convenient way to participate in Voting, both are experimental prototypes and the use of either of them involves a high degree of risk. There are numerous ways the Voting Contracts, the Open Source Software and Service could fail in an unexpected way, resulting in the total and absolute loss of all of your funds, including MKR and other cryptocurrency, tokens or digital assets.

#### 2. Modification of Terms of Use
These Terms may be discretionarily modified or replaced at any time, unless stated otherwise herein. The most current version of these Terms will be posted on the Site with the “Last Revised” date at the top of the Terms changed. Any changes or modifications will be effective immediately upon posting the revisions to the Site. You shall be responsible for reviewing and becoming familiar with any such modifications. You waive any right you may have to receive specific notice of such changes or modifications. Use of the Service by you after any modification to the Terms constitutes your acceptance of the Terms as modified. If you do not agree to the Terms in effect when you access or use the Service, you must stop using the Service.
#### 3. Eligibility
You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms.
The Dai System and Software and Voting Contracts are global and by accessing the Content or Service, you are representing and warranting that you are of the legal age of majority in your jurisdiction as is required to access such Service and Content and enter into arrangements as provided by the Service. You further represent that you are otherwise legally permitted to use the service in your jurisdiction including owning cryptographic tokens of value and interacting with the Service or Content in any way. You further represent you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that MakerDAO or any of the MakerDAO Volunteers (as defined below) is not liable for your compliance with such laws. Finally, you represent and warrant that you will not use the Service for any illegal activity.
#### 4. Representations, Warranties, and Risks
#### 4.1. No Representation or Warranty.
You expressly understand and agree that your use of the Service is at your sole risk.
(A) ALL PERSONS, ENTITIES, AGENTS, AND VOLUNTEERS INVOLVED WITH THE CREATION OF THE OPEN SOURCE OPEN SOURCE  SOFTWARE, INCLUDING, WITHOUT LIMITATION, THE VOTING CONTRACTS DISPLAYED THROUGH THE SERVICE MAKE AND EXPRESSLY DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY; AND (B) WITH RESPECT TO OPEN SOURCE SOFTWARE, THE DAI SYSTEM AND SOFTWARE, VOTING CONTRACTS, DAI TOKENS AND MKR TOKENS, THE MAKERDAO VOLUNTEERS AND ALL RELATED ENTITIES AND AGENTS SPECIFICALLY DO NOT REPRESENT, WARRANT AND EXPRESSLY DISCLAIM ANY REPRESENTATION OR WARRANTY, EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION, ANY REPRESENTATIONS OR WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, USAGE, SECURITY, SUITABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE, OR AS TO THE WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY DEFECTS THEREIN, WHETHER LATENT OR PATENT. THE MAKERDAO VOLUNTEERS OR ANY RELATED ENTITIES OR AGENTS DO NOT REPRESENT OR WARRANT THAT THE SERVICE AND ANY RELATED INFORMATION ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.
#### 4.2. Disclaimer of Fiduciary Duties
TO THE FULLEST EXTENT PERMITTED BY LAW AND NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT OR ANY OTHER AGREEMENT CONTEMPLATED HEREIN OR APPLICABLE PROVISIONS OF LAW OR EQUITY OR OTHERWISE, THE PARTIES HERETO HEREBY AGREE TO ELIMINATE ANY AND ALL FIDUCIARY DUTIES THE MAKERDAO VOLUNTEERS OR ANY RELATED ENTITIES AND AGENTS MAY HAVE TO YOU, OR YOUR AGENTS, AND AFFILIATES, OR THE END USERS OF THE SERVICE, THE SITE OR ITS CONTENT, PROVIDED THAT SUCH EXCLUSION OR LIMITATION OF LIABILITY SHALL NOT EXTEND TO MISAPPROPRIATION OF YOUR ASSETS OR FUNDS, SITE OR CONTENT PROVIDED BY THE MAKERDAO VOLUNTEERS OR ANY RELATED ENTITIES AND AGENTS OR OTHER ACTS OR OMISSIONS THAT CONSTITUTE A BAD FAITH VIOLATION OF THE IMPLIED CONTRACTUAL COVENANT OF GOOD FAITH AND FAIR DEALING.
#### 4.3 Sophistication and Risk of Cryptographic Systems
By utilizing the Service or interacting with the Content in any way, you represent that you understand the inherent risks associated with cryptographic systems; and warrant that you have an understanding of the usage, intricacies, and difficulties of using native cryptographic tokens, such as Ether (ETH), Bitcoin (BTC), Maker (MKR), smart contract based-tokens such as those that follow the Ethereum Token Standard (https://github.com/ethereum/EIPs/issues/20), and blockchain-based software systems.
In general, the underlying software for blockchain networks is open source such that anyone can use, copy, modify, and distribute it. By using the Service, you acknowledge and agree (i) that MakerDAO Volunteers or any related entities are not responsible for operation of the underlying software and networks that there exists no guarantee of functionality, security, or availability of such software and networks; and (ii) that the underlying protocols are subject to sudden changes in operating rules (known as “Forks”), and that such Forks may materially affect the Dai System and Software and the Voting Contracts. It might be discretionarily decided not to support (or cease supporting) the Forked network entirely. You acknowledge and agree that MakerDAO volunteers assume absolutely no responsibility whatsoever in respect of any underlying software protocols, whether Forked or not.
#### 4.4 Risk of Regulatory Actions in One or More Jurisdictions
The Dai System and Software, the Voting Contracts, MakerDAO and ETH could be impacted by one or more regulatory inquiries or regulatory action, which could impede or limit the ability of MakerDAO Volunteers to continue to develop, or which could impede or limit your ability to access or use the Service or Ethereum blockchain, including access to your funds, including your MKR tokens.
#### 4.5 Risk of Weaknesses or Exploits in the Field of Cryptography
You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptocurrencies and Service or Content, which could result in the theft or loss of your cryptographic tokens (including MKR tokens) or property. To the extent possible, it is intended to update the protocol underlying the Service to account for any advances in cryptography and to incorporate additional security measures, but does not guarantee or otherwise represent full security of the system. By using the Service or accessing Content, you acknowledge these inherent risks.
#### 4.6 Volatility of Cryptocurrency
You understand that Ethereum and other blockchain technologies and associated currencies or tokens, including MKR tokens, are highly volatile due to many factors including but not limited to adoption, speculation, technology and security risks. You also acknowledge that the cost of transacting on such technologies is variable and may increase at any time causing impact to any activities taking place on the Ethereum blockchain. You acknowledge these risks and represent that MakerDAO Volunteers or any related entity or person cannot be held liable for such fluctuations or increased costs.
#### 4.7 Application Security
You acknowledge that the Dai System and Software as well as Voting Contracts are subject to flaws and acknowledge that you are solely responsible for evaluating any code provided by the Services or Content. This warning and others later provided by MakerDAO Volunteers in no way evidence or represent an ongoing duty to alert you to all of the potential risks of utilizing the Service or Content.
#### 4.8 Website Accuracy
Although it is intended to provide accurate and timely information on the Site and other tools making up the Dai System and Software, the Site (including, without limitation, the Content) or relevant tools may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including without limitation information regarding our policies. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Site or relevant tools are your sole responsibility and MakerDAO volunteers shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by any entity. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to the Site or available via other relevant tools.
#### 4.9 Technical Knowledge
Any use or interaction with the Dai System and Software as well as Voting Contracts requires a comprehensive understanding of applied cryptography and computer science in order to appreciate inherent risks, including those listed above. You represent and warrant that you possess relevant knowledge and skills.
#### 4.10 Voting in Cryptographic Systems
You acknowledge and understand that voting based on smart contracts, blockchains and cryptographic systems in general, including the so-called on-chain voting, is a new and progressing field. Any of the risks mentioned above may result in the theft or loss of your cryptographic tokens (including MKR tokens) or property and also in various inaccuraccies regarding votes you aimed to cast, including your vote not being casted at all or casted in an unintended way. For more information about some of the dangers and pitfalls associated with blockchain based voting systems please refer to the following http://hackingdistributed.com/2018/07/02/on-chain-vote-buying/
#### 5. Indemnity
You agree to release and to indemnify, defend and hold harmless MakerDAO Volunteers and any related  entities, as well as the officers, directors, employees, shareholders and representatives of any of the foregoing entities, from and against any and all losses, liabilities, expenses, damages, costs (including attorneys’ fees, fees or penalties imposed by any regulatory authority and court costs) claims or actions of any kind whatsoever arising or resulting from your use of the Service, your violation of these Terms of Use, your violation of any law, rule, or regulation, or the rights of any third party, and any of your acts or omissions that implicate publicity rights, defamation or invasion of privacy. Each of the MakerDAO Volunteers reserve the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with MakerDAO Volunteers in the defense of such matter.
#### 6. Limitation on liability
YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE SITE AND SERVICE. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU SEND OR RECEIVE DURING YOUR USE OF THE SITE AND SERVICE MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER ACQUIRED BY UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE AND SERVICE IS AT YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER MAKERDAO VOLUNTEERS NOR ANY RELATED ENTITIES, SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER TANGIBLE OR INTANGIBLE LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT LIABILITY OR ANY OTHER THEORY (EVEN IF ANY OF THE MAKERDAO VOLUNTEERS OR RELATED ENTITIES HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE SITE OR SERVICE; THE USE OR THE INABILITY TO USE THE SITE OR SERVICE; UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SITE OR SERVICE; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL MALFUNCTIONS; FAILURES, INCLUDING PUBLIC UTILITY OR TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY, DELETIONS OR DEFECTS OF ANY DEVICE OR NETWORK, PROVIDERS, OR SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT PERMIT PARTICIPATION IN THE SERVICE); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY TO FULLY ACCESS THE SITE OR SERVICE OR ANY OTHER WEBSITE; THEFT, TAMPERING, DESTRUCTION, OR UNAUTHORIZED ACCESS TO, IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATION THEREOF; OR ANY OTHER MATTER RELATING TO THE SITE OR SERVICE.
SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
#### 7. Our Proprietary Rights
All title, ownership and intellectual property rights in and to the Service are owned by MakerDAO Volunteers, related entities or their licensors. You acknowledge and agree that the Service contains proprietary and confidential information that is protected by applicable intellectual property and other laws. Except as expressly authorized by a relevant entity, you agree not to copy, modify, rent, lease, loan, sell, distribute, perform, display or create derivative works based on the Service, in whole or in part.
#### 8. Links
The Service provides, or third parties may provide, links to other World Wide Web or accessible sites, applications or resources. Because none of the MakerDAO Volunteers have control over such sites, applications and resources, you acknowledge and agree that MakerDAO Volunteers or any related entity is not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that MakerDAO Volunteers or any related entity shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.
#### 9. Termination and Suspension
MakerDAO may terminate or suspend all or part of the Service and your Dai System and Software as well as the Site access immediately, without prior notice or liability, if you breach any of the terms or conditions of the Terms. Upon termination of your access, your right to use the Service will immediately cease.
The following provisions of the Terms survive any termination of these Terms: INDEMNITY; WARRANTY DISCLAIMERS; LIMITATION ON LIABILITY; OUR PROPRIETARY RIGHTS; LINKS; TERMINATION; NO THIRD-PARTY BENEFICIARIES; BINDING ARBITRATION AND CLASS ACTION WAIVER; GENERAL INFORMATION.
#### 10. No Third-Party Beneficiaries
You agree that, except as otherwise expressly provided in these Terms, there shall be no third party beneficiaries to the Terms.
#### 11. Notice and Procedure For Making Claims of Copyright Infringement
If you believe that your copyright or the copyright of a person on whose behalf you are authorized to act has been infringed, please provide a written Notice (legal@makerdao.com) containing the following information:
an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;
a description of the copyrighted work or other intellectual property that you claim has been infringed;
a description of where the material that you claim is infringing is located on the Service;
your address, telephone number, and email address;
a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
a statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.
#### 12. Arbitration and Class Action Waiver
#### 12.1 Initial Dispute Resolution
The parties agree shall use their best efforts to engage directly to settle any dispute, claim, question, or disagreement and engage in good faith negotiations which shall be a condition to either party initiating an arbitration.
#### 12.2 Binding Arbitration
If we cannot resolve the dispute through good-faith negotiations, you and we agree that any dispute arising under this Agreement shall be finally settled in binding arbitration, on an individual basis, in accordance with the American Arbitration Association's rules for arbitration of consumer-related disputes (accessible at https://www.adr.org/sites/default/files/Consumer%20Rules.pdf) and you and we hereby expressly waive trial by jury and right to participate in a class action lawsuit or class-wide arbitration. The arbitration will be conducted by a single, neutral arbitrator and shall take place in the county or parish in which you reside, or another mutually agreeable location, in the English language. The arbitrator may award any relief that a court of competent jurisdiction could award, including attorneys' fees when authorized by law, and the arbitral decision may be enforced in any court. At your request, hearings may be conducted in person or by telephone and the arbitrator may provide for submitting and determining motions on briefs, without oral hearings. The prevailing party in any action or proceeding to enforce this agreement shall be entitled to costs and attorneys' fees.
If the arbitrator(s) or arbitration administrator would impose filing fees or other administrative costs on you, we will reimburse you, upon request, to the extent such fees or costs would exceed those that you would otherwise have to pay if you were proceeding instead in a court. We will also pay additional fees or costs if required to do so by the arbitration administrator's rules or applicable law. Apart from the foregoing, each Party will be responsible for any other fees or costs, such as attorney fees that the Party may incur. If a court decides that any provision of this section 12.2 is invalid or unenforceable, that provision shall be severed and the other parts of this section 12.2 shall still apply. In any case, the remainder of this Agreement will continue to apply.

#### 12.3 Governing law
For any dispute not subject to arbitration you and MakerDAO agree to submit to the personal and exclusive jurisdiction of and venue in the federal and state courts located in New York, New York. You further agree to accept service of process by mail, and hereby waive any and all jurisdictional and venue defenses otherwise available.
The Terms and the relationship between you and MakerDAO shall be governed by the laws of the State of New York without regard to conflict of law provisions.
#### 13. General Information
#### 13.1 Entire Agreement
These Terms together with  the Privacy Policy (and any additional terms, rules and conditions of participation that may be posted on the Service) constitute the entire agreement with respect to the Service and supersedes any prior agreements, oral or written. In the event of a conflict between these Terms and the additional terms, rules and conditions of participation, the latter will prevail over the Terms to the extent of the conflict.
#### 13.2 Waiver and Severability of Terms
The failure of any entity to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect.
#### 13.3 Statute of Limitations
You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Service or the Terms must be filed within one (1) year after such claim or cause of action arose or be forever barred.
#### 13.4 Section Titles
The section titles in the Terms are for convenience only and have no legal or contractual effect.
#### 13.5 Communications
Users with questions, complaints or claims with respect to the Service may contact us using the relevant contact information set forth above and at legal@makerdao.com.
#### 14. Privacy Policy
All information collected on the Site is subject to the Privacy Policy. By using the Service, you consent to all actions taken with respect to your information in compliance with the Privacy Policy.
#### 15. Prohibited Use
You may not use the Service to engage in the following categories of activity ("Prohibited Uses"). The specific types of use listed below are representative, but not exhaustive. If you are uncertain as to whether or not your use of the Services involves a Prohibited Use, or have questions about how these requirements apply to you, please contact us at legal@makerdao.com By opening using the Service provided here, you confirm that you will not use this Service to do any of the following:
Unlawful Activity: Activity which would violate, or assist in violation of, any law, statute, ordinance, or regulation, sanctions programs administered in any relevant country, including but not limited to the U.S. Department of Treasury's Office of Foreign Assets Control ("OFAC"), or which would involve proceeds of any unlawful activity; publish, distribute or disseminate any unlawful material or information
Abuse Other Users: Interfere with another individual's or entity's access to or use of any Services; defame, abuse, extort, harass, stalk, threaten or otherwise violate or infringe the legal rights (such as, but not limited to, rights of privacy, publicity and intellectual property) of others; incite, threaten, facilitate, promote, or encourage hate, racial intolerance, or violent acts against others; harvest or otherwise collect information from the Site about others, including without limitation email addresses, without proper consent
Fraud: Activity which operates to defraud MakerDAO, Dai System and Software users, or any other person; provide any false, inaccurate, or misleading information.
Intellectual Property Infringement: Engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy or any other proprietary right under the law, including but not limited to sales, distribution, or access to counterfeit music, movies, software, or other licensed materials without the appropriate authorization from the rights holder; use of MakerDAO intellectual property, name, or logo, including use of MakerDAO trade or service marks, without express consent from MakerDAO or in a manner that otherwise harms MakerDAO; any action that implies an untrue endorsement by or affiliation with MakerDAO.
`;

const TermsWrapper = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 5px;
    color: #48495f;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const Terms = ({ onCancel, onComplete }) => {
  return (
    <Box maxWidth="548px" m="0 auto">
      <Grid gridRowGap="m">
        <Box mb="s" textAlign="center">
          <h2>Terms of Use</h2>
        </Box>
        <Card py="m" px="l">
          <Overflow y="scroll" height="300px">
            <TermsWrapper>
              <Text t="p4">
                <ReactMarkdown skipHtml={true} source={terms} />
              </Text>
            </TermsWrapper>
          </Overflow>
        </Card>
        <Text textAlign="center">
          <p>
            By clicking 'I agree' you confirm you have read and agree to the
            terms of service and agree to our{' '}
            <Link
              href="https://makerdao.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </Link>
          </p>
        </Text>
        <Flex justifyContent="center">
          <Button variant="secondary-outline" onClick={onCancel} mr="s">
            Cancel
          </Button>
          <Button onClick={onComplete}>I agree</Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Terms;
