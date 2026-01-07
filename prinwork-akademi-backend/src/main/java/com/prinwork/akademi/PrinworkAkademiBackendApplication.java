package com.prinwork.akademi;

import com.prinwork.akademi.config.PaymentProperties;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@SpringBootApplication
@EnableConfigurationProperties(PaymentProperties.class)
public class PrinworkAkademiBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrinworkAkademiBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner printEndpoints(RequestMappingHandlerMapping mapping) {
		return args -> {
			System.out.println("\n================= ENDPOINT LIST =================");
			mapping.getHandlerMethods().forEach((info, method) -> {
				String patterns = info.getPatternValues().isEmpty()
						? ""
						: String.join(", ", info.getPatternValues());

				String methodsStr = info.getMethodsCondition().getMethods().isEmpty()
						? "ANY"
						: info.getMethodsCondition().getMethods().toString();

				System.out.println(methodsStr + "  " + patterns + "  ->  "
						+ method.getBeanType().getSimpleName() + "#" + method.getMethod().getName());
			});
			System.out.println("=================================================\n");
		};
	}
}
