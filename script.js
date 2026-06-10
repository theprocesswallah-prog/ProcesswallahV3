/**
 * Processwallah — System Client Interactions
 * Pure Vanilla JavaScript implementation.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE RESPONSIVE NAVIGATION CONTROL
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('#mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Subtle rotation of mobile nav lines
            const bars = mobileToggle.querySelectorAll('.bar');
            if (mainNav.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(3px, -4px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Autoclose navigation menu on anchor routing
        mainNav.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const bars = mobileToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // 2. DETAILED SYSTEMS SPECIFICATIONS DATA (MODAL TRIGGER)
    const systemDatabase = {
        'bom': {
            title: 'BOM Automation System',
            category: 'Google Workspace Architecture',
            problem: 'Traditional, rigid systems require heavy manual overhead to recalibrate multi-level Bills of Materials upon price shifts or alternative vendor use.',
            solution: 'Developed a cascading recalculation system that maps physical parts, operational assembly logic, scrap percentages, and component rates in real time.',
            outcomes: [
                'Decreased BOM calculation errors by removing manual spreadsheets dependency.',
                'Immediate estimation sync with live raw stock pricing lists.',
                'Direct automated output generation configured for shop floor execution teams.'
            ],
            extraShowcase: false
        },
        'workorder': {
            title: 'Work Order Management System',
            category: 'Process Routing Web App',
            problem: 'Paper routing cards led to blind spots regarding active shop batch cycles, causing dispatch planning errors.',
            solution: 'Engineered a digital queue tracker system where job runs are logged via clean forms specifically designed for simple mobile interactions.',
            outcomes: [
                'Instant cycle timing stats across physical workflow queues.',
                'Drastic reduction in administrative verification emails between front office and production teams.',
                'Clear tracing accountability for operators and QA supervisors.'
            ],
            extraShowcase: false
        },
        'prodplan': {
            title: 'Production Planning Dashboard',
            category: 'Scheduling Intelligence',
            problem: 'Production scheduling relied on guess-estimation, resulting in machine bottlenecks and missed shipment targets.',
            solution: 'Aggregated raw material volume alerts, open orders, and technical machinery capacities into an elegant planning engine.',
            outcomes: [
                'Improved layout planning precision and order compliance.',
                'Optimized raw inventory flow rates without risk of stockouts.',
                'Real-time workload balancing across available machinery lines.'
            ],
            extraShowcase: false
        },
        'inspect': {
            title: 'Inspection Analytics Dashboard',
            category: 'Statistical Quality Control',
            problem: 'Quality checks logged via paper led to late identification of defect origins.',
            solution: 'Engineered a visual analytical system to record incoming checks, processing dimensions, and final yield grades.',
            outcomes: [
                'Fast defect tracking back to exact material batches and operators.',
                'Dynamic statistics pinpointing key manufacturing quality trends.',
                'Simplified data integration supporting long-term compliance metrics.'
            ],
            extraShowcase: false
        },
        'taskmgmt': {
            title: 'Task Management System',
            category: 'Core Operations Platform',
            problem: 'Critical task handoffs and machinery maintenance procedures were lost in shift changes.',
            solution: 'Built a central platform providing clear checklist structures, task assignments, and secure login verification.',
            outcomes: [
                'Unified task visibility across multiple physical production teams.',
                'Accountability logs tracking checklist completion status across shifts.',
                'Direct database visibility for historical validation and diagnostics.'
            ],
            extraShowcase: true // Activates custom image gallery for this detailed overview
        },
        'portal': {
            title: 'Client Portal Interface',
            category: 'Secure Client Extranet',
            problem: 'Answering customer progress calls drained key engineering personnel and management time.',
            solution: 'Configured a secure external client interface that lets business partners check status pipelines on active manufacturing runs directly.',
            outcomes: [
                'Significantly lowered inbound administrative status calls.',
                'Increased client satisfaction levels through complete order transparency.',
                'Eliminated database exposure risks by separating operational networks.'
            ],
            extraShowcase: false
        }
    };

    // 3. MODAL LOGIC HANDLERS
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalDynamicContent');
    const closeModalBtn = document.querySelector('.modal-close');

    const openSystemDetails = (systemId) => {
        const item = systemDatabase[systemId];
        if (!item) return;

        let modalHTML = `
            <span class="modal-category-tag">${item.category}</span>
            <h3>${item.title}</h3>
            
            <h4>Operational Challenge</h4>
            <p>${item.problem}</p>
            
            <h4>Engineered Solution</h4>
            <p>${item.solution}</p>
            
            <h4>Proven System Outcomes</h4>
            <ul class="modal-bullets">
                ${item.outcomes.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        `;

        // If Task Management is chosen, display the Task Management Detail Gallery
        if (item.extraShowcase) {
            modalHTML += `
                <div class="task-showcase-container">
                    <h4 class="showcase-header">System Detail Gallery</h4>
                    <p>This operational platform is composed of several modules, from login check-ins to scheduling screens:</p>
                    <div class="task-grid-visual">
                        <div class="task-detail-thumb">
                            <img src="images/task-dashboard.jpg" alt="Task Dashboard Interface" class="responsive-img" title="Task Dashboard">
                        </div>
                        <div class="task-detail-thumb">
                            <img src="images/task-delegation.jpg" alt="Task Delegation Module" class="responsive-img" title="Task Delegation">
                        </div>
                        <div class="task-detail-thumb">
                            <img src="images/employee-database.jpg" alt="Employee Database Control" class="responsive-img" title="Employee Database">
                        </div>
                        <div class="task-detail-thumb">
                            <img src="images/profile-section.jpg" alt="Operator Profiles" class="responsive-img" title="Profile Details">
                        </div>
                        <div class="task-detail-thumb">
                            <img src="images/task-history.jpg" alt="Historical Event Log" class="responsive-img" title="Task History">
                        </div>
                        <div class="task-detail-thumb">
                            <img src="images/secure-login.jpg" alt="Secure Authentication screen" class="responsive-img" title="Secure Login Screen">
                        </div>
                    </div>
                </div>
            `;
        }

        modalContent.innerHTML = modalHTML;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const closeSystemDetails = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Attach click listeners to cards
    document.querySelectorAll('.system-card').forEach(card => {
        const actionBtn = card.querySelector('.open-detail-modal');
        const systemId = card.getAttribute('data-system');
        if (actionBtn && systemId) {
            actionBtn.addEventListener('click', () => openSystemDetails(systemId));
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeSystemDetails);
    }

    // Close modal on background shade click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeSystemDetails();
        }
    });

    // Close modal on Escape keystroke
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeSystemDetails();
        }
    });
});
