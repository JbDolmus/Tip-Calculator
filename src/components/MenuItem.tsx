import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    dispatch: ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    className="border-2 border-teal-400 w-full p-3 flex justify-between cursor-pointer hover:bg-teal-200"
    >
        <p>{item.name}</p>
        <p className=" font-black">$ {item.price}</p>
    </button>
  )
}
