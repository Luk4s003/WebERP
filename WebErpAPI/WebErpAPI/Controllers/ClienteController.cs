using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebErpAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> GetClientes()
        {
            return new List<Cliente>()
            {
                new Cliente
                {
                    nome = "Lukas",
                    cpf = "358243002863",
                    email = "rlukas082@gmail.com",
                    telefone = "11987996846",
                    dataNascimento = new DateTime(2003, 04, 03),
                    dataCadastro = DateTime.Now
                }
            };
        }
    }
}
