using Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly DataContext _context ;
        public ProductsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]//api/products
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }
        [HttpGet("{id}")]//api/products/id
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return await _context.Products.FindAsync(id);
        }
    }
}