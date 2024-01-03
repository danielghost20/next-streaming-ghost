import { Navigation } from "./navigation";
import { Toogle } from "./toggle";
import { Wrapper } from "./wrapper";

export  function Sidebar () {
    
    return (
        <Wrapper>
            <Toogle/>
            <Navigation/>
        </Wrapper>
    )
}