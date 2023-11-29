import React from 'react';
// import data from "../../mockdata/data"
import fetchData from '../../api-data/data'; 
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import "./Home.scss"
import { useState } from 'react';
import fetchData from "../../api-data/apiData"

// import fetchData from "../../api-data/apiData"

const Home = function(props) {

  // useEffect(() => {
    
  //   const apiData=searchData;
  //   console.log(apiData);
  // }, []);

  fetchData();

  const [job, setJob] = useState(0)
  const [modal, setModal] = useState(false)

  const openModal = function () {
    setModal(true)
  }

  const closeModal = function () {
    setModal(false)
  }

  const nextJob = function() {
    setJob(prev =>  prev + 1)
  }

fetchData();
// fetchData();

  return (
      <div className='home'>
        <MainJobPoints data={data.data} job={job} openModal={openModal}/>
        <ActionButtons data={data.data} job={job} nextJob={nextJob}/>
        {!!modal && <JobDetailsModal data={data.data} closeModal={closeModal} job={job}/>}
      </div>
  );
}

export default Home;