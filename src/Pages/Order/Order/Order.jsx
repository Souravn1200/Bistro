import React, { useState } from 'react';
import orderCoverImg from '../../../assets/assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Order = () => {
    const categories =  ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    let {category} = useParams();
    const initialIndex =  categories.indexOf(category);

    const [tabInd, setTabInd] = useState(initialIndex)
    const [menu] = useMenu();


    
    console.log(category);


    const pizza =  menu.filter(item => item.category === 'pizza')
    const dessert =  menu.filter(item => item.category === 'dessert')
    const salad =  menu.filter(item => item.category === 'salad')
    const soup =  menu.filter(item => item.category === 'soup')
    const drinks =  menu.filter(item => item.category === 'drinks')
    
    
    return (
        <div>
            <Helmet>
                <title>Bistro / Order</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>

            <Tabs defaultIndex={tabInd} onSelect={(index) => setTabInd(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizz</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;