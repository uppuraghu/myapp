import { ImageComponent } from "../image/imageComponent";
import { Heading1 } from "../headings/headings";

import { ListParentOrdered } from "../list/listParent";
import ButtonComponent from "../button/button";

export const card = () => { 
    return (
            <div>
                <Heading1/>
                <ImageComponent/>
                <ListParentOrdered/>
                <ButtonComponent/>
            </div>
    );
};