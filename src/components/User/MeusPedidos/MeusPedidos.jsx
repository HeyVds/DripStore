import "./meusPedidos.css";

export const MeusPedidos = () => {
  return (
    <>
      <div className="container-my-orders">
        <section className="title-my-orders">
          <h3 className="text-title-my-orders">Minhas Informações</h3>
          <p className="text-status-order">STATUS</p>
        </section>

        <section className="list-my-orders">
          <hr className="line-my-orders" />
          <div className="item-my-orders">
            <div className="detail-order">
              <img
                src="../../../../public/SlideTenis-image/slide1.png"
                alt="shoe"
              />
              <div className="text-detail-order">
                <p className="text-n-order">Pedido n°: 211231421</p>
                <p className="text-order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <p className="status-order-finished">Finalizado</p>
          </div>

          <hr className="line-my-orders" />
          <div className="item-my-orders">
            <div className="detail-order">
              <img
                src="../../../../public/SlideTenis-image/slide1.png"
                alt="shoe"
              />
              <div className="text-detail-order">
                <p className="text-n-order">Pedido n°: 211231421</p>
                <p className="text-order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <p className="status-order-in-progress">Em progresso</p>
          </div>

          <hr className="line-my-orders" />
          <div className="item-my-orders">
            <div className="detail-order">
              <img
                src="../../../../public/SlideTenis-image/slide1.png"
                alt="shoe"
              />
              <div className="text-detail-order">
                <p className="text-n-order">Pedido n°: 211231421</p>
                <p className="text-order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <p className="status-order-canceled">Cancelado</p>
          </div>
        </section>
      </div>
    </>
  );
};
