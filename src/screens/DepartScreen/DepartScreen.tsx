import React, { useEffect, useState } from 'react'
import './DepartScreen.scss'
import { ItemDepart } from '../../components/ItemDepart/ItemDepart';
import { data } from '../../data/depart_data';
import { Link } from 'react-router-dom';
export const DepartScreen = () => {
    const [value, setValue] = useState(5000);
    const [value2, setValue2] = useState(1000);
    const [value3, setValue3] = useState<string[]>([
        'home',
        'townhomes',
        'apartments'
    ]);
    const [check, setCheck] = useState({
        home: true,
        townhomes: true,
        apartments: true
    });
    const [count, setCount] = useState({
        minbed: 0,
        maxbed: 2,
        minbath: 0,
        maxbath: 2,
    });
    const handlePrice = (ev: any) => {
        // console.log(ev.target.value);
        setValue(ev.target.value)
    }
    const handlePrice2 = (ev: any) => {
        // console.log(ev.target.value);
        setValue2(ev.target.value)
    }
    const handleChange = (e: any) => {
        setCheck({
            ...check, [e.target.name]: e.target.checked
        })
    }
    const handleCount = (e: any) => {
        setCount({
            ...count, [e.target.name]: e.target.value
        })
    }
    // console.log(count);
    const handleArray = () => {
        // console.log(check);
        // let temp=['home','townhomes','apartments'];
        if (check.home === false) {
            const filtrado = value3.filter(el => el !== 'home')
            setValue3(filtrado)
            // const filtrado = temp.filter(el => el !== 'home')
            // console.log(filtrado);
            // setValue3(filtrado)
        }
        if (check.home === true && !value3.includes('home')) {
            // temp.push('home')
            // setValue3(temp)
            setValue3([...value3, 'home'])
        }
        if (check.townhomes === false) {
            const filtrado = value3.filter(el => el !== 'townhomes')
            setValue3(filtrado)
            // const filtrado = temp.filter(el => el !== 'townhomes')
            // setValue3(filtrado)
        }
        if (check.townhomes === true && !value3.includes('townhomes')) {
            setValue3([...value3, 'townhomes'])
            // temp.push('townhomes')
            // setValue3(temp)
        }
        if (check.apartments === false) {
            const filtrado = value3.filter(el => el !== 'apartments')
            setValue3(filtrado)
            // const filtrado = temp.filter(el => el !== 'apartments')
            // setValue3(filtrado)
        }
        if (check.apartments === true && !value3.includes('apartments')) {
            setValue3([...value3, 'apartments'])
            // temp.push('apartments')
            // setValue3(temp)
        }
        // console.log(temp);
    }
    const handleFilter = () => {
        setValue(5000)
        setValue2(1000)
        setCheck({
            home: true,
            townhomes: true,
            apartments: true
        })
        setCount({
            minbed: 0,
            maxbed: 2,
            minbath: 0,
            maxbath: 2,
        })
    }
    // console.log(check);
    // console.log(value3);
    // const memoCall=useCallback(() => {
    //     console.log('memo');
    //     handleArray()
    // }, [handleArray]);
    // memoCall()
    useEffect(() => {
        handleArray()
    }, [check])

    return (
        <div className='container__depart'>
            <div className="navbar__depart">
                <Link to="/">
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/599/6692764599_c59ba620-2565-4883-a8ca-e5cdf8b368a5.png?cb=1642881927" alt="logo" />
                </Link>
                <div className="buttons__register">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
            <div className="list__depart">
                {/* <div className="card__depart">
                </div> */}
                {
                    data.filter((item) => (item.price <= value && value2 <= item.price && value3.includes(item.type) && count.minbed <= item.bedrooms && item.bedrooms <= count.maxbed && count.minbath <= item.bedrooms && item.bathrooms <= count.maxbath)
                    ).map(item => <ItemDepart item={item} key={item.id} />)
                }
            </div>
            <div className="container__filter">
                <h1>Search Property by FIlter</h1>
                <div className="price__range">
                    <h2>Price Range</h2>
                    <label htmlFor="">
                        <h3>Max</h3>
                        <input className='range__left' autoComplete='off' type="range" min={value2} max={5000} name="" id="" value={value} onChange={handlePrice} />
                        <h3>Min</h3>
                        <input className='range__rigth' autoComplete='off' type="range" min={1000} max={value} name="" id="" onChange={handlePrice2} />
                    </label>
                    <div className="price__range__number">
                        <h3>${value2}</h3>
                        <h3>${value}</h3>
                    </div>
                </div>
                <div className="property__types">
                    <label htmlFor="home">
                        <input type="checkbox" defaultChecked={true} name="home" id="home" value="home" onChange={(e) => handleChange(e)} />
                        <h2>Homes</h2>
                    </label>
                    <label htmlFor="townhomes">
                        <input type="checkbox" defaultChecked={true} name="townhomes" id="townhomes"
                            value="townhomes" onChange={(e) => handleChange(e)} />
                        <h2>Townhomes</h2>
                    </label>
                    <label htmlFor="apartments">
                        <input type="checkbox" defaultChecked={true} name="apartments" id="apartments"
                            value="apartments" onChange={(e) => handleChange(e)} />
                        <h2>Apartments</h2>
                    </label>
                </div>
                <div className="facility">
                    <div className="bedrooms">
                        <h3>Bedrooms</h3>
                        <div className="inputs">
                            <label htmlFor="">
                                <h2>Min</h2>
                                <input onChange={handleCount} min={0} max={10} value={count.minbed} type="number" name="minbed" id="" />
                            </label>
                            <label htmlFor="">
                                <h2>Max</h2>
                                <input onChange={handleCount} min={0} max={10} value={count.maxbed} type="number" name="maxbed" id="" />
                            </label>
                        </div>
                    </div>
                    <div className="bathrooms">
                        <h3>Bathrooms</h3>
                        <div className="inputs">
                            <label htmlFor="">
                                <h2>Min</h2>
                                <input onChange={handleCount} min={0} max={10} value={count.minbath} type="number" name="minbath" id="" />
                            </label>
                            <label htmlFor="">
                                <h2>Max</h2>
                                <input onChange={handleCount} min={0} max={10} value={count.maxbath} type="number" name="maxbath" id="" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container__buttons__depart">
                    <button className='btn__action' >Reset</button>
                    <button className='btn__action' onClick={handleFilter}>Apply</button>
                </div>
            </div>
        </div>
    )
}
