

function Buscador(){
    return(

<div id="filters">
<input type="text" id="name-filter" placeholder="Busca a tu personaje!"/>
<select name="status-filter" id="status-filter">
  <option value="">Filtrar por estado</option>
  <option value="alive">Vivo</option>
  <option value="dead">Muerto</option>
  <option value="unknown">Desconocido</option>
</select>
</div>
)}

export default Buscador;