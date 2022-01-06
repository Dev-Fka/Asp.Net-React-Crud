using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.dataAccess.Migrations
{
    public partial class changeValColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_chiefUserId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "chiefUserId",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_chiefUserId",
                table: "Users",
                column: "chiefUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_chiefUserId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "chiefUserId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_chiefUserId",
                table: "Users",
                column: "chiefUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
