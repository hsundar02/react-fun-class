import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor() {
        super();
        this.state = {
            name: "newCLassState",
            age: 25,
            mobiles: [
                {
                    id: "001",
                    name: "oneplus11",
                    price: 56999,
                    isPurchased: true,
                },
                {
                    id: "002",
                    name: "Vivi Y100",
                    price: 24999,
                    isPurchased: false,
                },
                {
                    id: "003",
                    name: "Redmi 10",
                    price: 56999,
                    isPurchased: true,
                },
                {
                    id: "004",
                    name: "iphone 13",
                    price: 62990,
                    isPurchased: false,
                },
                {
                    id: "005",
                    name: "Nokia",
                    price: 12000,
                    isPurchased: true,
                },
                {
                    id: "006",
                    name: "Poco M4",
                    price: 13999,
                    isPurchased: true,
                },
            ],
        };
    }
    sortHTL = () => {
        // const mobileSortedHL = [...this.state.mobiles].sort(
        //   (a, b) => b.price - a.price
        // );
        // this.setState(mobileSortedHL);
        // console.log(mobileSortedHL);
        this.setState(this.state.mobiles.sort((a, b) => b.price - a.price));
    };

    sortLTH = () => {
        // const mobileSortedLH = [...this.state.mobiles].sort(
        //   (a, b) => a.price - b.price
        // );
        // this.setState(mobileSortedLH);
        // console.log(mobileSortedLH);
        this.setState(this.state.mobiles.sort((a, b) => a.price - b.price));
    };

    filterdata = () => {

        this.setState({
            mobiles: this.state.mobiles.filter((a) =>
                a.isPurchased === true)
        });

    };

    // sortAlpha= ()=>{
    //   this.setState(this.state.mobiles.sort((a,b)=>{
    //     a.name.localeCompare(b.name);
    //   }))
    // }
    sortAlpha = () => {
        const sortedbyalpha = [...this.state.mobiles.sort((a, b) =>
            a.name.localeCompare(b.name))]
        this.setState({ mobiles: sortedbyalpha })
        // console.log(sortedbyalpha);
    }
    render() {
        return (
            <div><div>
                {this.state.name} {" - "}
                {this.state.age}
                {this.state.mobiles.map((item, index) => (
                    <li key={index}>
                        {item.id}
                        {" - "}
                        {item.name}
                        {" - "}
                        {item.price}
                    </li>
                ))}
                {/* <button onClick={()=>{this.setState({name:"newSetState"})}}>CLICK ME</button> */}
                <button
                    onClick={() => {
                        this.sortHTL();
                    }}
                >
                    HTL
                </button>
                <button
                    onClick={() => {
                        this.sortLTH();
                    }}
                >
                    LTH
                </button>
                <button
                    onClick={() => {
                        this.filterdata();
                    }}
                >
                    filter
                </button>

                <button onClick={() => { this.sortAlpha() }}>SortByAlphabet</button>
            </div></div>
        )
    }
}

export default ClassComponent;


