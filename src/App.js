import React,{ useState } from 'react';
import data from './data';
import Categories from './Categories';

function App() {
  let brea = data.filter((dat)=> dat.category === 'breakfast');
  const [foods,setFoods] = useState(brea);
  const [cate,setCate] = useState('breakfast');

  const pickBreakfast = () => {
    setFoods(brea);
    setCate('breakfast');
  }

  const pickLunch = () => {
    let lun = data.filter((dat)=> dat.category === 'lunch');
    setFoods(lun);
    setCate('lunch');
  }

  const pickShake = () => {
    let sha = data.filter((dat)=> dat.category === 'shakes');
    setFoods(sha);
    setCate('shakes');
  }

  return (
    <>
      <navbar>
        <div className="title">
          <h1>Our Eggshellent Menu</h1>
          <h1 className="underline"></h1>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={()=>pickBreakfast()}>Breakfast</button>
          <button className="filter-btn" onClick={()=>pickLunch()}>Lunch</button>
          <button className="filter-btn" onClick={()=>pickShake()}>Shakes</button>
        </div>
      </navbar>
      <div className="menu">
        <div className="title">
          {(cate === 'breakfast') && <h2>Breakfast Menu</h2>}
          {(cate === 'lunch') && <h2>Lunch Menu</h2>}
          {(cate === 'shakes') && <h2>Shakes Menu</h2>}
          <h2 className="underline"></h2>
        </div>
        <section className="section section-center">
          {foods.map((food)=>{
            return <Categories key={food.id} {...food}/>
          })}
        </section>
      </div>
    </>
  );
}

export default App;
