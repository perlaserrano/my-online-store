import React from 'react';
import '../assets/css/filterSideBar.css'

interface FilterSidebarProps {
    onCategoryChange: (category: string) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ onCategoryChange }) => {
    return (
        <div className="sidebar">
            <p>Filtros</p>
            <hr />
            <p>Categorías</p>
            <ul>
                <li onClick={() => onCategoryChange('')}>Vestidos Tallas Pequeña</li>
                <li onClick={() => onCategoryChange('Ropa')}>Vestido Tallas Grandes</li>
                <li onClick={() => onCategoryChange('Accesorios')}>Accesorios</li>
                <li onClick={() => onCategoryChange('Accesorios')}>Zapatos</li>
                <li onClick={() => onCategoryChange('Accesorios')}>Abrigos</li>
                {/* Agrega más categorías según sea necesario */}
            </ul>
            <hr />
            <p>Talla</p>
            <hr />
            <ul>
                <li onClick={() => onCategoryChange('')}>Medium</li>
                <li onClick={() => onCategoryChange('')}>Unitalla</li>
                <li onClick={() => onCategoryChange('Accesorios')}>L</li>
                <li onClick={() => onCategoryChange('Ropa')}>XL</li>
                <li onClick={() => onCategoryChange('Accesorios')}>XXL</li>
                <li onClick={() => onCategoryChange('Accesorios')}>XXXL</li>
               
            </ul>
            <hr />
            <p>Material</p>
            <hr />
            <ul>
                <li onClick={() => onCategoryChange('')}>Poliester</li>
                <li onClick={() => onCategoryChange('')}>Saten</li>
                <li onClick={() => onCategoryChange('Accesorios')}>Pana</li>
                <li onClick={() => onCategoryChange('Ropa')}>Encaje</li>
                <li onClick={() => onCategoryChange('Accesorios')}>Pana</li>
                {/* <li onClick={() => onCategoryChange('Accesorios')}>XXXL</li> */}
               
            </ul>
        </div>
    );
};
