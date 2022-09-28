import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../componentes/ItemList';
import GetProducts from '../utils/getProducts';
import { useParams } from 'react-router-dom';
import costumFetch from '../utils/costumFetch'


const ItemListContainer=()=>{

const[ProdList, setProdList] = useState([]);
const {id} = useParams();

useEffect(()=>{
    if(id){
costumFetch(2000, GetProducts.filter(item => item.category === id))
.then((response)=> setProdList(response))
.catch(()=>console.error('error'))
.finally()
    }else{

        costumFetch(2000, GetProducts)
        .then((response)=> setProdList(response))
        .catch(()=>console.error('error'))
        .finally()
    }

},[id])

return(
<>
<div className='container-card'>
<ItemList products={ProdList}/>
</div>
</>
)
;   
}


export default ItemListContainer