import ProductModel from './product.model';
import { IProductParams, IProduct, IProductQueryWithSkip } from './product.types';


export async function getProducts(query?: IProductQueryWithSkip) {
  if (!query) return ProductModel.find();

  const { limit, skip, sort, priceFrom } = query;
  return ProductModel.find({ price: { $gte: priceFrom } })
    .limit(limit)
    .skip(skip)
    .sort(sort);
}

export async function getProductsWithCategory(query?: IProductQueryWithSkip) {
  if (!query) return ProductModel.find().populate('categories');

  const { limit, skip, sort, priceFrom } = query;
  return ProductModel.find({ price: { $gte: priceFrom } })
    .populate('categories')
    .limit(limit)
    .skip(skip)
    .limit(limit)
    .sort(sort);

}

export async function getProductsByCategory(query: IProductQueryWithSkip) {
  const { categoryId, limit, sort, skip } = query;
  if (categoryId) return ProductModel.find({ categoryId }).limit(limit).skip(skip).sort(sort);

  return [];
}

export async function getProductsBySubCategory(query: IProductQueryWithSkip) {
  const { subCategoryId, limit, sort, skip } = query;

  if (subCategoryId) return ProductModel.find({ subCategoriesId: { $in: subCategoryId } })
    .limit(limit)
    .skip(skip)
    .sort(sort);

  return [];
}

export async function getProduct(params: IProductParams) {
  return ProductModel.findOne(params);
}

export async function createProduct(productData: IProduct) {
  return ProductModel.create(productData);
}

export async function updateProduct(params: IProductParams, productData: IProduct) {
  const { slug } = params;
  return ProductModel.findOneAndUpdate(
    { slug },
    { $set: productData },
    {
      new: true,
      runValidators: true,
    },
  );
}

export async function deleteProduct(params: IProductParams) {
  const { slug } = params;

  return ProductModel.findOneAndDelete({ slug });
}

