import { DeleteButton, Datagrid } from "react-admin";


export function applyOverrides() {
    setDefaultProps(DeleteButton, {mutationMode: "pessimistic"})
    setDefaultProps(Datagrid, {bulkActionButtons: false})    
}


function setDefaultProps(Element: any, props: any) {
    Element.defaultProps = {
        ...Element.defaultProps,
        ...props
    }
}
