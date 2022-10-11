// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import './BasicMenu.css'
//
// export default function BasicMenu({pages}) {
//     const navigate = useNavigate()
//     const aboutTeacher = ['Портфолио', 'Расписание', 'Достижения']
//     const forStudent = ['Объявления', 'Интернет-ресурсы', 'Уроки', 'Библиотека', 'Тесты']
//     const forParents = ['Статьи', 'Новости', 'Объявления']
//     const webPages = ['Ссылки на ресурсы']
//     const [currentButton, setCurrentButton] = useState('')
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setCurrentButton(event.currentTarget.id)
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = (el) => {
//         console.log(el)
//         if(el !== undefined)
//             navigate(`/${el}`)
//         setAnchorEl(null);
//     };
//
//     return (
//         <div className="BasicMenu">
//             {pages.map((el) => (
//                 <Button
//                     key={el}
//                     id={el}
//                     aria-controls={open ? 'basic-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                     onClick={handleClick}
//                     variant="primary"
//                     value={el}
//                 >
//                     {el}
//                 </Button>
//             ))
//             }
//
//             {
//                 currentButton === 'Об учителе'?
//                     <Menu
//                         id="basic-menu"
//                         anchorEl={anchorEl}
//                         open={open}
//                         onClose={handleClose}
//                         MenuListProps={{
//                             'aria-labelledby': 'basic-button',
//                         }}
//                     >
//                         {
//                             aboutTeacher.map( (el)=> <MenuItem className='menuitem' onClick={()=>handleClose('portfolio')}>{el}</MenuItem>)
//                         }
//
//                     </Menu> :
//                     currentButton === 'Ученику'?
//                         <Menu
//                             id="basic-menu"
//                             anchorEl={anchorEl}
//                             open={open}
//                             onClose={handleClose}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                         >
//                             {
//                                 forStudent.map( (el)=> <MenuItem className='menuitem' onClick={handleClose}>{el}</MenuItem>)
//                             }
//                         </Menu> :
//                         currentButton === 'Родителю'?
//                             <Menu
//                                 id="basic-menu"
//                                 anchorEl={anchorEl}
//                                 open={open}
//                                 onClose={handleClose}
//                                 MenuListProps={{
//                                     'aria-labelledby': 'basic-button',
//                                 }}
//                             >
//                                 {
//                                     forParents.map( (el)=> <MenuItem className='menuitem' onClick={handleClose}>{el}</MenuItem>)
//                                 }
//                             </Menu>:
//                             currentButton === 'Интернет-ресурсы'?
//                                 <Menu
//                                     id="basic-menu"
//                                     anchorEl={anchorEl}
//                                     open={open}
//                                     onClose={handleClose}
//                                     MenuListProps={{
//                                         'aria-labelledby': 'basic-button',
//                                     }}
//                                 >
//                                     {
//                                         webPages.map( (el)=> <MenuItem className='menuitem' onClick={handleClose}>{el}</MenuItem>)
//                                     }
//                                 </Menu>: console.log()
//             }
//
//
//
//                 </div>
//                 );
//             }
