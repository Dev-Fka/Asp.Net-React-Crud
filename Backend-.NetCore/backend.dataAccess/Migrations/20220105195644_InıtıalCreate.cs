using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace backend.dataAccess.Migrations
{
    public partial class InıtıalCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(type: "text", nullable: true),
                    lastName = table.Column<string>(type: "text", nullable: true),
                    identyNum = table.Column<string>(type: "varchar(11)", maxLength: 11, nullable: true),
                    birthPlace = table.Column<string>(type: "text", nullable: true),
                    birthDate = table.Column<string>(type: "text", nullable: true),
                    addedTime = table.Column<DateTime>(type: "datetime", nullable: false),
                    updatedTime = table.Column<DateTime>(type: "datetime", nullable: false),
                    company = table.Column<string>(type: "text", nullable: true),
                    chiefUserId = table.Column<int>(type: "int", nullable: false),
                    degree = table.Column<string>(type: "text", nullable: true),
                    phoneNumber = table.Column<string>(type: "varchar(11)", maxLength: 11, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Users_chiefUserId",
                        column: x => x.chiefUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_chiefUserId",
                table: "Users",
                column: "chiefUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
