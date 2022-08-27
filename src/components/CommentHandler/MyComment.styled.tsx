import styled from "styled-components";



interface gridProps{
    cols:number;
}
export const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(${(props:gridProps)=>props.cols},1fr);
   
`
interface gridItemProps{
    rowStart:null|number;
    rowEnd:null|number;
    colStart:null|number;
    colEnd:null|number;
}
export const GridItem = styled.div`
    ${(props:gridItemProps)=>{
        let cssProps = "";
        if(props.rowStart!=null){
            cssProps+= `grid-row-start:${props.rowStart};`;
        }
        if(props.rowEnd!=null){
            cssProps+= `grid-row-end:${props.rowEnd};`;
        }
        if(props.colStart!=null){
            cssProps+= `grid-column-start:${props.colStart};`;
        }
        if(props.colEnd!=null){
            cssProps+= `grid-column-end:${props.colEnd};`;
        }
        return cssProps;
    }}
`
export const VerticalLine = styled.div`
    border-right:2px solid rgb(233,233,237);
    height:100%;
    width:5px;
    margin:auto;
`