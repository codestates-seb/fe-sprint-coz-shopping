function Main() {
  return (
    <main>
      <div className="section_container">
        <section className="product_list">
          <article>
            <h3>상품리스트</h3>
            <div className="item_container">
              <div className="item_box">
                <p>상품이름</p>
              </div>
              <div className="item_box">
                <p>#카테고리이름</p>
              </div>
              <div className="item_box">
                <p>기획전 이름</p>
              </div>
              <div className="item_box">
                <p>브랜드 이름</p>
              </div>
            </div>
          </article>
        </section>
        <section className="bookmark_list">
          <article>
            <h3>북마크리스트</h3>
            <div className="item_container">
              <div className="item_box">
                <p>상품이름</p>
              </div>
              <div className="item_box">
                <p>#카테고리이름</p>
              </div>
              <div className="item_box">
                <p>기획전 이름</p>
              </div>
              <div className="item_box">
                <p>브랜드 이름</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Main;
