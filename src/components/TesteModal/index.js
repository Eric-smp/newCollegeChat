import './styles.css'
export function TesteModal({isOpen}){

    if(isOpen){
        return(
            <div className="contentModal">
                <div className='informationForm'>
                    <div className='headerForm'>
                         <h1>Entre</h1>
                    </div>
                </div>
            </div>
         )
    }else{
    return null
    }
}


export default TesteModal;