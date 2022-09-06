import styled from "styled-components";



interface gridProps{
    cols:number;
}
export const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(${(props:gridProps)=>props.cols},1fr);
   
`
interface gridItemProps{
    $colStart:null|number;
    $colEnd:null|number;
}
export const GridItem = styled.div`
    ${({$colStart,$colEnd}:gridItemProps)=>{
        let cssProps = "";
        if($colStart!=null){
            cssProps+= `grid-column-start:${$colStart};`;
        }
        if($colEnd!=null){
            cssProps+= `grid-column-end:${$colEnd};`;
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