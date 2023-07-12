import Item from "components/item";
import { Tray } from "./style";

function ProductList() {
  return (
    <Tray>
      {[
        {
          id: 67,
          type: "Product",
          title: "아이스크림 모자",
          sub_title: null,
          brand_name: null,
          price: "11900",
          discountPercentage: null,
          image_url:
            "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          brand_image_url: null,
          follower: null,
        },
        {
          id: 73,
          type: "Product",
          title: "아이맥 24인치",
          sub_title: null,
          brand_name: null,
          price: "1573390",
          discountPercentage: 40,
          image_url:
            "https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          brand_image_url: null,
          follower: null,
        },
        {
          id: 67,
          type: "Product",
          title: "아이스크림 모자",
          sub_title: null,
          brand_name: null,
          price: "11900",
          discountPercentage: 50,
          image_url:
            "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          brand_image_url: null,
          follower: null,
        },
        {
          id: 73,
          type: "Product",
          title: "아이맥 24인치",
          sub_title: null,
          brand_name: null,
          price: "1573390",
          discountPercentage: 40,
          image_url:
            "https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          brand_image_url: null,
          follower: null,
        },
        {
          id: 34,
          type: "Category",
          title: "반려동물",
          sub_title: null,
          brand_name: null,
          price: null,
          discountPercentage: null,
          image_url:
            "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
          brand_image_url: null,
          follower: null,
        },
      ].map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </Tray>
  );
}

export default ProductList;
