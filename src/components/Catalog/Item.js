import "../../styles/Catalog/Item.css"

function Item(props) {

   const {
      data
   } = props

   return (
      <div className="items-container">
         {
            data.map((item, index) => {
               return (
                  <div className="item-card">
                     <div className="img-container">
                        <img className="item-img" src={item.url} alt={item.name} />
                     </div>
                     <span className="item-brand">{item.brand}</span>
                     <span className="item-name">{item.name}</span>
                     {
                        (item.amount > 0 && <p className="item-amount">На складе {item.amount} шт.</p>) || (<p className="item-amount">Под заказ</p>)
                     }
                     <span className="item-price">{item.price} руб</span>
                  </div>
               )
            })
         }
      </div>
   )
}

export default Item