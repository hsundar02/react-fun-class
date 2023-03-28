import React, { useState } from "react";

const FunctionComponent = () => {

    const [mobiles, sortMobiles] = useState([
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
        }
    ])
    console.log(mobiles)




    const sortMobileHTL = () => {
        const mobileSortedHL = [...mobiles].sort((a, b) => b.price - a.price);
        sortMobiles(mobileSortedHL);
    }


    const sortMobileLTH = () => {
        const mobileSortedLTH = [...mobiles].sort((a, b) => a.price - b.price);
        sortMobiles(mobileSortedLTH);
    }

    const Filterdata = () => {
        const filteredData = [...mobiles].filter((elm, i) => elm.isPurchased === true)
        sortMobiles(filteredData);

    }
    const AgainFilterdata = () => {
        const filteredData = [...mobiles].filter((elm, i) => elm.isPurchased === true)
        sortMobiles(filteredData);

    }


    //
    //  const sortByname=()=>{
    //   const Namesorted=[...mobiles].sort();
    //   sortMobiles(Namesorted);


    //  }



    //  const sortByname=()=>{
    //   const Namesorted=[...mobiles].sort((data1,data2)=>{
    //     if(data1.name< data2.name){
    //       return -1;
    //     }
    //     if(data1.name > data2.name){
    //       return 1; 
    //     }
    //     return 0;
    //   });
    //   sortMobiles(Namesorted);

    // }\

    const sortByname = () => {
        const Namesorted = [...mobiles].sort((a, b) =>
            a.name.localeCompare(b.name));
        sortMobiles(Namesorted);
    }
    return (
        <div> <div>
            <h1>List Of Mobiles</h1>


            {mobiles.map((n, index) => (

                <ul key={index}>
                    <li>
                        {n.id}--{n.name}--{n.price}
                    </li>
                </ul>

            ))
            }

            <button onClick={() => sortMobileHTL()} style={{ marginRight: "50px", backgroundColor: "green" }}> HTL</button>
            <button onClick={() => sortMobileLTH()} style={{ marginRight: "50px", backgroundColor: "yellow" }}> LTH</button>
            <button onClick={() => { Filterdata(true); AgainFilterdata(false) }} style={{ marginRight: "50px", backgroundColor: "red " }}>Filter-Data</button>
            {/* <button onClick={()=>ShowFilterdata()}>again-Data</button> */}

            <button onClick={() => sortByname()}>Sort Name</button>


            {/* <button onClick={()=> sortMobileByName()} style={{marginRight:"50px", backgroundColor:"blue"}}> Name</button> */}



        </div></div>
    )
}

export default FunctionComponent