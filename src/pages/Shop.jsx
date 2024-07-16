import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import HeadLines from './../components/HeadLines';
import FilterCategoryItem from '../components/FilterCategoryItem';
import Card from './../components/Card';

const Shop = () => {
   return (
      <div>
         <BreadCrumb page={'Shop'} />
         <HeadLines subTitle={"Shop by category"} title={"Shop by category"} />
         <div className="filterItems grid sm:grid-cols-4 grid-cols-2 gap-8">
            <FilterCategoryItem />
            <FilterCategoryItem />
            <FilterCategoryItem />
            <FilterCategoryItem />
         </div>
         <div className="cardItems mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </div>
   )
}

export default Shop
