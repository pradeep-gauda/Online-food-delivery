import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    
const handleExploerMenu=(item)=>{  
setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)
}


  return (
    <>
        <div className='container mt-3' id="menu">
            <h2>What's on your mind?</h2>

            <div className='explore-menu-list mt-1'>
             {
                menu_list.map((item,index)=>(
                      
                    <div key={index} className='explore-menu-list-item' onClick={()=>handleExploerMenu(item)}>                
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                   
                    </div>
                ))
             }
            </div>
            <hr className='separation mt-2'/>
        </div>
    </>
  )
}

export default ExploreMenu