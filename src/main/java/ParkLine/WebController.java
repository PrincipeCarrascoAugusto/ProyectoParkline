
package ParkLine;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    
    @GetMapping("/parkline")
    public String mostrarWeb() {
        return "index"; // Nombre del archivo HTML
    }
    
}
