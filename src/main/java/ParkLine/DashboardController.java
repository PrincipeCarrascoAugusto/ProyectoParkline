
package ParkLine;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping("/dashboard")
    public String mostrarDashboard() {
        return "dashboard"; // Nombre del archivo HTML
        
    }
}
