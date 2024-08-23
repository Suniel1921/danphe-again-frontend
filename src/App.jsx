import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import AdminRoute from './components/admin/adminProtectedRoute/AdminProtectedRoute';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ClientDashboard from './components/clientDashboard/ClientDashboard';
import QuotePricing from './pages/pricing/QuotePricing';
import Package from './pages/pricing/Package';
import CreatePackage from './components/admin/dashboardMainContent/packages/CreatePackage';
import Cart from './pages/cart/Cart';
import UserContactInfo from './pages/contact/UserContactInfo';
import UserCompanyInfo from './pages/contact/UserCompanyInfo';
import Contact from './pages/contact/Contact';
import Checkout from './pages/cart/Checkout';
import EditInfo from './components/clientDashboard/clientInfo/EditInfo';
import ManageOrders from './components/admin/dashboardMainContent/manageOrders/ManageOrders';
import UploadDocuments from './components/clientDashboard/clientInfo/UploadDocuments';
import About_Ascend from './pages/Navbar_aboutus/About_Ascend.com/About_Ascend';
import Corporate_Gurantee from './pages/Navbar_aboutus/Corporate Compilance Gurantee/Corporate_Gurantee';
import Customer_review from './pages/Navbar_aboutus/Recent Customer Reviews/Customer_review';
import Benefits_of_Incorporating from "./pages/Learning Center Navbar/Benefits of Incorporating/Benefits_of_Incorporating";
import StartUp_Task from "./pages/Learning Center Navbar/Start-up Tasks/StartUp_Task";
import Corporation_VS_LLC from "./pages/Learning Center Navbar/Corporation vs. LLC/Corporation_VS_LLC";
import Incorporation_101 from "./pages/Learning Center Navbar/Incorporation 101/Incorporation_101";
import Industry_specific_information from "./pages/Learning Center Navbar/Industry Specific Information/Industry_specific_information";
import Tax_filings from "./pages/Learning Center Navbar/Tax Filings & Deducations/Tax_filings";
import State_guides from "./pages/Learning Center Navbar/State Guides/State_guides";
import Learningcenter from "./pages/Learning Center Navbar/Learning-center/Learningcenter";
import Starting_A_Business from "./pages/Starting Business Navbar/Starting_A_Business/Starting_A_Business";
import None_Profit_Corporation from "./pages/Starting Business Navbar/None_Profit_Corporation/None_Profit_Corporation";
import C_Corporation from "./pages/Starting Business Navbar/C_Corporation/C_Corporation";
import S_Corporation from "./pages/Starting Business Navbar/S_Corporation/S_Corporation";
import Limited_Liability_Company from "./pages/Starting Business Navbar/Limited_Liability_Company/Limited_Liability_Company";
import Incorporate_In_Welfare from "./pages/Starting Business Navbar/Incorporate_In_Welfare/Incorporate_In_Welfare";
import Employer_ID_Number from "./pages/Starting Business Navbar/Employer_ID_Number/Employer_ID_Number";
import Registered_Agent_Service from "./pages/Starting Business Navbar/Registered_Agent_Service/Registered_Agent_Service";


import Scrop_Election from "./pages/Maintaining_A_BUsiness Navbar/Scrop Election (from 2553)/Scrop_Election"
import Annual_report from "./pages/Maintaining_A_BUsiness Navbar/Annual report/Annual_report"
import Business_Lisences from "./pages/Maintaining_A_BUsiness Navbar/Business Lisences/Business_Lisences"
import By_Laws_operating_Agreements from "./pages/Maintaining_A_BUsiness Navbar/By Laws & operating Agreements/By_Laws_operating_Agreements"
import Certificate_of_Good_Standing from "./pages/Maintaining_A_BUsiness Navbar/Certificate of Good Standing/Certificate_of_Good_Standing"
import DBA_Business_Name from "./pages/Maintaining_A_BUsiness Navbar/DBA_Business Name/DBA_Business_Name"
import LLC_Tax_Status_Election from "./pages/Maintaining_A_BUsiness Navbar/LLC Tax Status Election (form 8832)/LLC_Tax_Status_Election"
import Make_a_Payment from "./pages/Maintaining_A_BUsiness Navbar/Make a Payment/Make_a_Payment"
import Maintaining_a_Business from "./pages/Maintaining_A_BUsiness Navbar/More/Maintaining_a_Business"
import NonProfit_501_Status from "./pages/Maintaining_A_BUsiness Navbar/NonProfit 501 (C) Status/NonProfit_501_Status"
import Register_in_Additional_States from "./pages/Maintaining_A_BUsiness Navbar/Register in Additional States/Register_in_Additional_States"
import Delware_Content from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/mainContent_Pages/Delware_Content';
import ComparisonChart from './pages/Learning Center Navbar/Benefits of Incorporating/Comparision chart/ComparisonChart';
import QualificationsForm from './pages/Forms/QualificationsForm/QualificationsForm';
import FormingaDelawareLLC from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Forming a Delaware LLC/FormingaDelawareLLC';
import DelawareBusinessNameSearch from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/DelawareBusinessNameSearch/DelawareBusinessNameSearch';
import DelawareBusinessLicenses from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/DelawareBusinessLicenses/DelawareBusinessLicenses';
import HowToWhyIncorporateinDelaware from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Why Delware/How To & Why Incorporate in Delaware/HowToWhyIncorporateinDelaware';
import AdvantagesofIncorporatinginDelware from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Why Delware/Advantages of Incorporating in Delaware/AdvantagesofIncorporatinginDelaware';
import DE_VS_NV from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Why Delware/DE vs. NV/DE_VS_NV';
import Fees_to_Start_a_Business_in_Delaware from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Ready, Set, Get Started!/Fees to Start a Business in Delaware/Fees_to_Start_a_Business_in_Delaware';
import Delaware_Filing_Forms from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Ready, Set, Get Started!/Delaware Filing Forms/Delaware_Filing_Forms';
import Formation_Registration from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Ready, Set, Get Started!/Formation_Registration/Formation_Registration';
import Taxes from './pages/Starting Business Navbar/Incorporate_In_Welfare/Pages_Inside_Delware/Ready, Set, Get Started!/Taxes/Taxes';





const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/quote-pricing' element={<QuotePricing />} />
              <Route path='/package-selection/:id' element={<Package />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/new-order' element={<Contact />} />
              <Route path='/existing-order' element={<Contact />} />
              <Route path='/contact-info' element={<UserContactInfo />} />
              <Route path='/company-info' element={<UserCompanyInfo />} />
              <Route path='/checkout' element={<Checkout />} />

              {/* Suman */}
              <Route path='/About_Ascend' element={<About_Ascend />} />
              <Route path='/Corporate_Gurantee' element={<Corporate_Gurantee />} />
              <Route path='/Customer_review' element={<Customer_review />} />

              {/* Learning Center */}
              <Route path='/StartUp_Task' element={<StartUp_Task />} />
              <Route path='/Corporation_VS_LLC' element={<Corporation_VS_LLC />} />
              <Route path='/Benefits_of_Incorporating' element={<Benefits_of_Incorporating />} />
              <Route path='/Incorporation_101' element={<Incorporation_101 />} />
              <Route path='/Industry_specific_information' element={<Industry_specific_information />} />
              <Route path='/Tax_filings' element={<Tax_filings />} />
              <Route path='/State_guides' element={<State_guides />} />
              <Route path='/Learningcenter' element={<Learningcenter />} />
              <Route path='/delware_welfare' element={<Delware_Content />} />



              {/* starting a business navbar */}
              <Route path='/Registered_Agent_Service' element={<Registered_Agent_Service />} />
              <Route path='/Employer_ID_Number' element={<Employer_ID_Number />} />
              <Route path='/Incorporate_In_Welfare' element={<Incorporate_In_Welfare />} />
              <Route path='/Limited_Liability_Company' element={<Limited_Liability_Company />} />
              <Route path='/S_Corporation' element={<S_Corporation />} />
              <Route path='/C_Corporation' element={<C_Corporation />} />
              <Route path='/None_Profit_Corporation' element={<None_Profit_Corporation />} />
              <Route path='/Starting_A_Business' element={<Starting_A_Business />} />

              {/* deafult page link */}
              <Route path='/ComparisonChart' element={<ComparisonChart />} />

              <Route path='/QualificationsForm' element={<QualificationsForm />} />


              {/* pages of delware welfare */}
              <Route path='/FormingaDelawareLLC' element ={ <FormingaDelawareLLC/> } />
              <Route path='/DelawareBusinessLicenses' element ={ <DelawareBusinessLicenses/> } />
              <Route path='/DelawareBusinessNameSearch' element ={ <DelawareBusinessNameSearch/> } />
              <Route path='/HowToWhyIncorporateinDelaware' element ={ <HowToWhyIncorporateinDelaware/> } />
              <Route path='/DE_VS_NV' element ={ <DE_VS_NV/> } />
              <Route path='/Delaware_Filing_Forms' element ={ <Delaware_Filing_Forms/> } />
              <Route path='/Formation_Registration' element ={ <Formation_Registration/> } />
              <Route path='/Taxes' element ={ <Taxes/> } />
              <Route path='/Fees_to_Start_a_Business_in_Delaware' element ={ <Fees_to_Start_a_Business_in_Delaware/> } />
              <Route path='/AdvantagesofIncorporatinginDelwar' element ={ <AdvantagesofIncorporatinginDelware/> } />
              {/* <Route path='/HowToWhyIncorporateinDelaware' element ={ <HowToWhyIncorporateinDelaware/> } /> */}



              {/* Maintaining a business navbar */}
              <Route path='/Scrop_Election' element={<Scrop_Election />} />
              <Route path='/Annual_report' element={<Annual_report />} />
              <Route path='/Business_Lisences' element={<Business_Lisences />} />
              <Route path='/By_Laws_operating_Agreements' element={<By_Laws_operating_Agreements />} />
              <Route path='/Certificate_of_Good_Standing' element={<Certificate_of_Good_Standing />} />
              <Route path='/DBA_Business_Name' element={<DBA_Business_Name />} />
              <Route path='/LLC_Tax_Status_Election' element={<LLC_Tax_Status_Election />} />
              <Route path='/Make_a_Payment' element={<Make_a_Payment />} />
              <Route path='/Maintaining_a_Business' element={<Maintaining_a_Business />} />
              <Route path='/NonProfit_501_Status' element={<NonProfit_501_Status />} />
              <Route path='/Register_in_Additional_States' element={<Register_in_Additional_States />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path='/client-dashboard' element={<ClientDashboard />} />
                <Route path='/edit-info' element={<EditInfo />} />
                <Route path='/upload-documents' element={<UploadDocuments />} />
              </Route>

              {/* Admin Protected Routes */}
              <Route path='/dashboard' element={<AdminRoute />}>
                <Route path='admin' element={<AdminDashboard />} />
                <Route path='admin/createPackage' element={<CreatePackage />} />
                <Route path='admin/manage-orders' element={<ManageOrders />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
