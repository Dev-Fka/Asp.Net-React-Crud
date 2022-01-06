using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.entity
{
    public class User
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        [MaxLength(11)]
        public string identyNum { get; set; }
        public string birthPlace { get; set; }
        public string birthDate { get; set; }
        public DateTime addedTime { get; set; }
        public DateTime updatedTime { get; set; }
        public string company { get; set; }
        public int? chiefUserId { get; set; }
        [ForeignKey("chiefUserId")]
        public User chiefUser { get; set; }
        public string degree { get; set; }
        [MaxLength(11)]
        public string phoneNumber { get; set; }
    
        public User()
        {
            this.addedTime=DateTime.Now;
        }
    }

    
}