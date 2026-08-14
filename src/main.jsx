import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./styles.css";

const asset=(id,ext="png")=>`https://www.figma.com/api/mcp/asset/${id}.${ext}`;
const A={
 logo:asset("36ea1f0f-510d-4922-9eb0-95a79158412e","svg"),
 white:asset("1f669de9-a36b-416a-8b1a-ee4cf3cd2a0a","svg"),
 website:asset("4baa8c02-f668-4548-ab90-bbe2ee5d6a17"),
 marketing:asset("0e46cdd5-d3fb-4c7d-91c4-47839dce723a"),
 meta:asset("46a27af1-d3d8-451b-b42c-5c50ae700c6f"),
 ceo:asset("bdc72f92-3682-4aec-b7af-63b04bd59d04")
};
const cases=["13d59ec8-5229-4aeb-b0db-447e3fd6dc4c","1f85fdcc-1768-488d-8279-e29c2d0233df","ff78f924-4905-4695-abc6-d79c70ab0a00","b28ad1e1-5c0f-4b37-99ed-665ef61dc586","daeabd9f-23de-47cb-acf2-484aba0fac81","4770a19b-a267-4361-860b-79ab89973b6c","700d3dd5-b7e9-4b88-8eaa-39276ba9ec74","057ea076-b3cb-4e94-b8a2-405a67cb83eb","023efc31-f1e9-4fb0-a437-521a3f41e9f1","02caa87e-ce81-4bfd-8fce-41c8cf48186b"].map(x=>asset(x));
const mira=["733a5d10-6db1-456c-a327-3ed6cbdbf090","d04f3fe5-afdc-440f-bae3-72cd2e8e285a","729b066a-72ab-4941-b234-c66037f07de7","ff543139-c7a1-4e0a-b5ec-6f9146ae7f61","aa693bbc-4fc9-42bf-a4ba-ef6d97f93633","a0ddeddd-9043-4edb-9e31-a7ce3df01924","48cf2be9-3311-4bf0-b74c-26c2b6b55c28","2355c1f9-7bbe-4767-aa10-585a2b230235","9c0a1568-9eff-4f83-8365-9c0ad05cf8e4","2d211161-715f-458d-b050-7bd71f66f544","38efc540-2a2a-4371-94d2-aee47a909dfa","b930eb92-71eb-4936-988a-9708fa4363cd","8353fd8f-4873-4f2c-9489-8bf1407d8a0c","48473e79-2d0e-4ccc-83a1-f2355515cfa7","34132d2d-91fa-4d5a-a637-426dd0eca6d2","83992dc1-1fa8-4c0b-91f8-21e033953603","396bf183-a0b3-41d6-9c50-96a4904ca3ad","2e926e72-205a-47ae-84e5-a9a267394dc8","e18b7275-af86-41a6-9c37-9c11d815cc61","17117c7f-0fdc-4534-aae4-74b7335de8a1","69751a42-4d0e-46e6-a712-0803cc8a985e","a6da6788-4558-4e74-b58e-4d9085ae53c9","5269032c-d7e0-45ce-ab79-59084000afb5"].map(x=>asset(x));
const blogImgs=["06c4e171-81a3-4164-9773-2e7cf3363ec2","28933d3b-ae64-43f2-b107-92aa30aa01e0","a07865f4-e033-4212-89a1-169201a76cca","57238eab-9f0a-445e-afd6-9839a32d32ab"].map(x=>asset(x));

function Rail(){return <div className="rail"><span>adelt</span></div>}
function Btn({children}){return <a className="btn" href="#contact">{children}<b>↗</b></a>}
function Header(){return <header><Link to="/"><img src={A.logo}/></Link><Btn>schedule a call</Btn></header>}
function Footer(){return <footer><div className="foot"><img src={A.white}/><div className="footgrid"><div>Services<br/>Our works<br/>Plans</div><div>Barcelona, Spain<br/><small>C/ de Cristóbal de Moura,<br/>49, Sant Martí<br/>08019<br/><br/>+34675389458<br/>business@adelt.io</small></div><div>Instagram　LinkedIn　Dribbble<br/><small>© adelt 2025</small></div></div></div></footer>}

function Home(){
 const awards=["Saapro – Site Of The Day","Saapro – Website Of The Day","Saapro — Silver in the nomination Best Industry Website","Saapro — Shortlisted for the Website of the Year","Saapro — Best International Website","Startech Awards – Website of The Day","Startech Awards – UI, UX, Innovation Design Award","Adelt – UI, UX, Innovation Design Award","Adelt – Website of The Day","Top B2B Company 2023"];
 return <><Rail/><Header/><main className="home">
 <section className="hero"><div><small>Go-to-market agency</small><h1>Branding, websites &<br/>strategies for startups</h1></div></section>
 <section><div className="narrow"><small>Ready go-to-market plan for businesses</small><h2>From Concept to Market in <em>20 days</em></h2></div><div className="process"><article className="orange"><h3>Briefing &<br/>Express research</h3><p>online interview<br/>internal analysis<br/>desk research</p><i>1 day</i></article><article><h3>Go-to-market<br/>strategy</h3><p>target audience research<br/>unique selling proposition<br/>mission<br/>product emotional message<br/>tone of voice</p></article></div></section>
 <section><h2>Our cases</h2><div className="casegrid">{cases.map((x,i)=><Link key={x} to={i===0?"/case/mira":"#"}><img src={x}/></Link>)}</div><Btn>all cases</Btn></section>
 <section className="two"><div><h2>Kind words from<br/>our clients</h2><p>We won't just be executors. We'll be your partners, we promise. Check out our verified testimonials from around the world about working with us.</p></div><div className="quotes"><article>Collaborating with adelt was like discovering the secret sauce to branding and web design. They turned our Startech.Awards vision into a delightful adventure.<footer><b>Liza Tikher</b><small>CMO Startech</small></footer></article><article>We at Davines are thoroughly impressed with the landing page designed by Adelt. Their creative approach and attention to detail resulted in a seamless online experience.<footer><b>Diana Alieva</b><small>Fashion & beauty marketing expert</small></footer></article></div></section>
 <section className="two awards"><h2>Awards</h2><div>{awards.map((x,i)=><p key={x}>{x}<small>{i<5?2025:i<9?2024:2023}</small></p>)}</div></section>
 <section><h2>And what about prices?</h2><div className="prices">{[["Branding","2500€+",A.marketing],["Website design & development","6000€+",A.website],["Marketing & performance strategies","3000€",A.marketing],["UX/UI","35€/hour",A.meta]].map(x=><article key={x[0]}><img src={x[2]}/><h3>{x[0]}</h3><p>{x[1]}</p><Btn>book a call</Btn></article>)}</div></section>
 <section className="two"><div><h2>And a few words<br/>from CEO</h2><img className="ceo" src={A.ceo}/><b>Anastasia Dontsova</b><small>CEO adelt</small></div><div className="speech"><p>At ADELT we're passionate about weaving together standout marketing strategies, creating memorable branding, and delivering sleek web designs 💥</p><p>Can’t wait to start your project!</p></div></section>
 <section id="contact" className="cta"><h2>Let’s make<br/>something <em>innovative</em></h2><p>Kick start a project with us today</p><Btn>Discuss a project</Btn> <Btn>schedule a call</Btn></section>
 </main><Footer/></>
}

function CasePage(){return <><Rail/><div className="sub"><Header/><main className="casepage"><aside><h1>MIRA</h1><small>Los Angeles – AI, Product</small><div className="tags">{["Branding","Web design","Web development","3D Product Visualization"].map(x=><span key={x}>{x}</span>)}</div><h2>Client</h2><p>MIRA Glasses are smart glasses with built-in AI. They record daily events, save meaningful details and give access to information in real time.</p><h2>Process</h2><p>We aimed to build a brand identity and website for a product where AI is the core function, not an add-on. The website combines product shots, interface screens and lifestyle photography.</p><div className="stats"><b>2 sequences<small>we made to present the product</small></b><b>1 day<small>to design the mobile version</small></b></div></aside><div className="gallery">{mira.map((x,i)=><img key={i} src={x}/>)}</div></main></div><Footer/></>}

function Blog(){const posts=[["How Startech Awards’ Branding Won Three International Awards","Learn how we developed a visually striking identity that reflects innovation, technological progress, and futuristic aesthetics—helping the Startech Awards brand shine on the global stage."],["Marketing in Latin America: Word of Mouth","Discover the power of word-of-mouth advertising in Latin America and why asking clients how they’re doing is crucial for success."],["Marketing for Neobanks: Why do they need a “face”?","Discover why neobanks need a human touch despite their digital nature and explore key marketing strategies to build trust."],["How brands can work with ChatGPT","Actionable insights and strategies for integrating AI-driven communication into your brand’s digital marketing efforts."]];
 return <><Rail/><div className="sub blog"><Header/><main><h1>Our blog</h1><nav><b>All posts</b><span>Agency life</span><span>Case study</span><span>Marketing</span><span>How To</span></nav><div className="bloggrid">{posts.map((p,i)=><article key={p[0]}><div><img src={blogImgs[i]}/><b>↗</b></div><h2>{p[0]}</h2><p>{p[1]}</p></article>)}</div><section className="cta"><h2>Let’s make<br/>something <em>outstanding</em></h2><p>Kick start a project with us today</p><Btn>Discuss a project</Btn> <Btn>schedule a call</Btn></section></main></div><Footer/></>}

function App(){return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/case/mira" element={<CasePage/>}/><Route path="/blog" element={<Blog/>}/></Routes></BrowserRouter>}
createRoot(document.getElementById("root")).render(<App/>);
