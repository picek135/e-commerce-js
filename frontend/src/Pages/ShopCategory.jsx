import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.scss';
import { ShopContext } from '../Context/ShopContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Item from '../Components/Item/Item';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  const [sortOrder, setSortOrder] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [searchText, setSearchText] = useState('');


  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const sortedProducts = all_product
  .filter((item) => props.category === item.category)
  .sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.new_price - b.new_price;
    } else if (sortOrder === 'desc') {
      return b.new_price - a.new_price;
    } else {
      return 0; // For "Unsorted" option, maintain the natural order
    }
  });

  const filteredProducts = sortedProducts.filter((item) => {
    if (priceRange === 'all') {
      return true;
    } else if (priceRange === '0-100') {
      return item.new_price >= 0 && item.new_price <= 100;
    } else if (priceRange === '100-200') {
      return item.new_price > 100 && item.new_price <= 200;
    } else if (priceRange === '200-300') {
      return item.new_price > 200 && item.new_price <= 300;
    } else {
      return item.new_price > 300;
    }
  });

  const searchedProducts = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='shop-category'>
      <div className="banner">
        <h1>SALES UP TO 50% OFF</h1>
        <p>Offer ends soon</p>
        <button>Shop now!</button>
        <img src={props.banner} alt="" />
      </div>
      <div className="indexSort">
        <div className="search">
          Search
          <input type="text" placeholder="type name"  value={searchText} onChange={handleSearchChange} />
        </div>
        <div className="sort">
          Sort by
          <select onChange={handleSortChange} value={sortOrder}><KeyboardArrowDownIcon className='icon'/>
            <option value="unsorted">Unsorted</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          
        </div>
        <div className="sort">
        Price Range
        <select onChange={handlePriceRangeChange} value={priceRange}>
          <option value="all">All</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-300">$200 - $300</option>
          <option value="300+">$300+</option>
        </select>
      </div>
      </div>
      
      
      <div className="products">
        {searchedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
      <div className="loadMore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;