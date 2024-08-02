import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { ProductsService } from '../services/products.service';
import { Product } from '../entity/product.entity';
import { CreateProductDto } from '../entity/dto/create-product.dto';
import { UpdateProductDto } from '../entity/dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.productsService.delete(id);
  }

  @Get('test/exception')
  testException(): void {
    throw new HttpException('This is a test exception', HttpStatus.BAD_REQUEST);
  }
}