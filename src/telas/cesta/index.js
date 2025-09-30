import react from "react"
import {flatlist, stylesheet, view} from "react-native";

export default function cesta(itens){
    <flatlist>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=> nome}
        listHeaderComponent={()=>{
            return <>
            
                </>
        }}
    </flatlist>
}

const estilos = stylesheet.create(