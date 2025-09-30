import react from "react"
import {flatlist, stylesheet, view} from "react-native";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

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

const estilos = stylesheet.create({
    titulo:{
        Color:"#464646",
        fontWeight