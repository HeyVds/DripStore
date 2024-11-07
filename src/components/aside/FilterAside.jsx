

export const FilterAside = () => {
    const marka = [
        { name: 'adidas', label: 'Adidas' },
        { name: 'calenciaga', label: 'Calenciaga' },
        { name: 'k-swiss', label: 'K-Swiss' },
        { name: 'nike', label: 'Nike' },
        { name: 'puma', label: 'Puma' },
        
      ];
    
      const categoria = [
        {name: 'esporte e lazer', label: 'Esporte e lazer'},
        {name: 'casual', label: 'Casual'},
        {name: 'utilitário', label: 'Utilitário'},
        {name: 'corrida', label: 'Corrida'}
      ];
    
    
      const genero = [
        {name: 'masculino', label:'Masculino'},
        {name: 'feminino', label:'Feminino'},
        {name: 'unisex', label: 'Unisex'}
      ]
    
      const estado = [
        {name: 'novo', label: 'Novo'},
        {name: 'Usado', label: 'Usado'}
      ]
    
    
      const [selectedMarkas, setSelectedMarkas] = useState(
        marka.reduce((acc) => {
          acc[marka.name] = false;
          return acc;
        }, {})
      );
    
      const [selectedCategoria, setSelectedCategoria] = useState(
        categoria.reduce((acc) => {
          acc[categoria.name] = false;
          return acc;
        }, {})
      );
    
    
    const [selectedGenero, setSelectedGenero] = useState(
      genero.reduce((acc) => {
        acc[genero.name] = false;
        return acc;
      }, {})
    )
    
    const [selectedEstado, setSelectedEstado] = useState(
      estado.reduce((acc) => {
        acc[estado.name] = false;
        return acc;
      }, {})
    )
    
      const handleCheckboxChange = (event, setFunction) => {
        const { name, checked } = event.target;
        setFunction((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      };
    
      const handleRadioChange = (event) => {
        const { name } = event.target;
        setSelectedEstado({
          novo: true,
          usado: false,
          [name]: false,
        });
      };
    
}