const Products = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
  },
  labels: {
    singular: 'product',
    plural: 'products',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text'
    },
    {
      name: 'descripcion',
      type: 'richText',
    },
    {
      name: 'precio',
      type: 'number',
    },
    {
      name: 'stock',
      type: 'number',
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Products;