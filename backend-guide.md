
# Hướng dẫn triển khai .NET 8 Web API Backend

Để ứng dụng này hoạt động đầy đủ với cơ sở dữ liệu, bạn nên tạo một dự án .NET 8 Web API trên Windows theo các bước sau:

## 1. Khởi tạo dự án
Mở CMD/Terminal và chạy lệnh:
```bash
dotnet new webapi -n EduManage.Api
cd EduManage.Api
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

## 2. Cấu trúc thư mục (Clean Architecture gợi ý)
- `Domain/`: Chứa các thực thể (Entity) như `Classroom`, `Student`, `AttendanceRecord`.
- `Infrastructure/`: Chứa `AppDbContext` và cấu hình Entity Framework.
- `Services/`: Chứa logic nghiệp vụ.
- `Controllers/`: Chứa API Endpoints.

## 3. Mẫu Controller (AttendanceController.cs)
```csharp
[ApiController]
[Route("api/[controller]")]
public class AttendanceController : ControllerBase
{
    private readonly IAttendanceService _service;
    public AttendanceController(IAttendanceService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> MarkAttendance([FromBody] List<AttendanceDto> records)
    {
        var result = await _service.SaveRecordsAsync(records);
        return Ok(result);
    }
}
```

## 4. Cấu hình CORS (Program.cs)
Để React có thể gọi API từ Localhost, hãy thêm cấu hình này vào `Program.cs`:
```csharp
builder.Services.AddCors(options => {
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});
// ...
app.UseCors("AllowReactApp");
```

## 5. Chạy dự án
Nhấn `F5` trong Visual Studio 2022 để khởi chạy Swagger và kiểm thử API.
