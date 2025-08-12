//import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"; 
import Layout from './components/Layout'
import OurChurch from './pages/about-us/OurChurch'
import OurDiocese from './pages/about-us/OurDiocese'
import OurPastorateCommittee from './pages/about-us/OurPastorateCommittee'
// import OurPresbyterInCharge from './pages/about-us/OurPresbyterInCharge'
import AboutUs from './pages/AboutUs'
import Choir from './pages/community-groups/Choir'
import SeniorCitizensFellowship from './pages/community-groups/SeniorCitizensFellowship'
import SundaySchool from './pages/community-groups/SundaySchool'
import WomensFellowship from './pages/community-groups/WomensFellowship'
import YouthFellowship from './pages/community-groups/YouthFellowship'
import CommunityGroups from './pages/CommunityGroups'
import ContactUs from './pages/ContactUs'
// import Gallery from './pages/Gallery'
import History from './pages/History'
// import FormerPCMembers from './pages/history/FormerPCMembers'
import FormerPresbyters from './pages/history/FormerPresbyters'
// import FormerSecretaries from './pages/history/FormerSecretaries'
// import FormerSextons from './pages/history/FormerSextons'
// import FormerTreasurers from './pages/history/FormerTreasurers'
import HistoryOurChurch from './pages/history/OurChurch'
import Home from './pages/Home'
// import NewsAndEvents from './pages/NewsAndEvents'
import Schedules from './pages/Schedules'
import OurTeamLeaders from './pages/about-us/OurTeamLeaders'


function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/our-church" element={<OurChurch />} />
        <Route path="/about-us/our-diocese" element={<OurDiocese />} />
        {/* <Route path="/about-us/our-presbyter-in-charge" element={<OurPresbyterInCharge />} /> */}
        <Route path="/about-us/our-pastorate-committee" element={<OurPastorateCommittee />} />
        <Route path="/about-us/our-team-leaders" element={<OurTeamLeaders />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/our-church" element={<HistoryOurChurch />} />
        <Route path="/history/former-presbyters" element={<FormerPresbyters />} />
        {/* <Route path="/history/former-secretaries" element={<FormerSecretaries />} />
        <Route path="/history/former-treasurers" element={<FormerTreasurers />} />
        <Route path="/history/former-pc-members" element={<FormerPCMembers />} />
        <Route path="/history/former-sextons" element={<FormerSextons />} /> */}
        <Route path="/community-groups" element={<CommunityGroups />} />
        <Route path="/community-groups/sunday-school" element={<SundaySchool />} />
        <Route path="/community-groups/youth-fellowship" element={<YouthFellowship />} />
        <Route path="/community-groups/womens-fellowship" element={<WomensFellowship />} />
        <Route path="/community-groups/senior-citizens-fellowship" element={<SeniorCitizensFellowship />} />
        <Route path="/community-groups/choir" element={<Choir />} />
        <Route path="/schedules" element={<Schedules />} />
        {/* <Route path="/news-and-events" element={<NewsAndEvents />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Layout>
  )
}

export default App