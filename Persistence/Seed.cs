using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return;
            
            var products = new List<Product>
        {
            new Product
            {
                name = "Laptop 1",
                link = "https://example.com/laptop1",
                price = "$1000",
                image = "laptop1.jpg"
            },
            new Product
            {
                name = "Laptop 2",
                link = "https://example.com/laptop2",
                price = "$1200",
                image = "laptop2.jpg"
            },
            new Product
            {
                name = "Laptop 3",
                link = "https://example.com/laptop3",
                price = "$800",
                image = "laptop3.jpg"
            },
            new Product
            {
                name = "Laptop 4",
                link = "https://example.com/laptop4",
                price = "$1500",
                image = "laptop4.jpg"
            },
            new Product
            {
                name = "Laptop 5",
                link = "https://example.com/laptop5",
                price = "$2000",
                image = "laptop5.jpg"
            },
            new Product
            {
                name = "Laptop 6",
                link = "https://example.com/laptop6",
                price = "$1800",
                image = "laptop6.jpg"
            },
            new Product
            {
                name = "Laptop 7",
                link = "https://example.com/laptop7",
                price = "$1600",
                image = "laptop7.jpg"
            },
            new Product
            {
                name = "Laptop 8",
                link = "https://example.com/laptop8",
                price = "$1400",
                image = "laptop8.jpg"
            },
            new Product
            {
                name = "Laptop 9",
                link = "https://example.com/laptop9",
                price = "$1100",
                image = "laptop9.jpg"
            },
            new Product
            {
                name = "Laptop 10",
                link = "https://example.com/laptop10",
                price = "$1300",
                image = "laptop10.jpg"
            }
        };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}