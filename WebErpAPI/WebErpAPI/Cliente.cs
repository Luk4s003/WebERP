namespace WebErpAPI
{
    public class Cliente
    {
        public int id { get; set; }
        public string nome { get; set; } = string.Empty;
        public string cpf { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string telefone { get; set; } = string.Empty;
        public DateTime dataNascimento { get; set; }
        public DateTime dataCadastro { get; set; } 
    }
}
