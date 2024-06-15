import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg'
/*import SearchIcon from '@mui/icons-material';*/
import { ImageSearch } from '@mui/icons-material';
import Select from '../../components/selectDrop/select';
import axios from 'axios';
import AddLocationIcon from '@mui/icons-material/AddLocation';


const Header = () => {
  const [Categories,setCategories] = useState([
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Fast food',
    'Baking material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice'
    
  ]);
    useEffect (() => {
      getCountry('https://countriesnow.space/api/v0.1/countries/');

  },[]);
  const countryList = [];
  const getCountry= async(url)=>{
    try{
      await axios.get(url).then((res) => {
        if(res!==null)
          {
            //console.log(res.data.data);
            res.data.data.map((item,index)=>
            {
              countryList.push(item.country);

            });
          }

      });

    }
    catch(error)
    {
      console.log(error.message);

    }

  }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="logo" />
            </div>
            {/* header search start*/}
            <div className="col-sm-5">

              <div className="headerSearch d-flex align-items-center">
                <Select data={Categories} placeholder={'All Categories'} icon={false}/>
                <div className='search'>
                  <input type='text' placeholder='Search for text...'></input>
                  <ImageSearch className='searchicon' />
                </div>
              </div>

            </div>
            <div className='col-sm-3 d-flex align-item-center'>
              <div className='countryWrapper'>
              <Select data={countryList} placeholder={'Your Location'} icon={<AddLocationIcon />}/>

              </div>
            </div>
            {/* header search end*/}

          </div> {/* row end */}
        </div>
      </header>
    </>
  );
}


export default Header;